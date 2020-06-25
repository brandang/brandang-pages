// min acceptable width/height ratio. Any lower and width should be increased so digit will not be distorted.
const minWidthHeightRatio = 0.25

export function getDigitsFromCanvas(canvas, canvasWidth, canvasHeight) {
    const context = canvas.getContext("2d")
    const pixelData = context.getImageData(0, 0, canvasWidth, canvasHeight).data
    const alphas = getAlphas(pixelData)
    const alphas2D = convertTo2DArray(alphas, canvasWidth)
    const digits = separateDigits(alphas2D)

    const scaledDigitAlphas = []

    for (let i in digits) {
        const digit = digits[i]
        const clampedArray = convertAlphasToClampedArray(digit)
        const rows = digit.length
        const cols = digit[0].length
        const imageData = new ImageData(clampedArray, cols, rows)
        const newCanvas = document.createElement("CANVAS")
        newCanvas.width = cols
        newCanvas.height = rows
        const canvasContext = newCanvas.getContext("2d")
        canvasContext.putImageData(imageData, 0, 0)
        const scaledCanvas = document.createElement("CANVAS")
        scaledCanvas.width = 8
        scaledCanvas.height = 8
        const scaledCanvasContext = scaledCanvas.getContext("2d")
        scaledCanvasContext.drawImage(newCanvas, 0, 0, 8, 8)
        scaledDigitAlphas.push(getAlphas(scaledCanvasContext.getImageData(0, 0, 8, 8).data))

        // console.log(scaledCanvas.toDataURL('image/png'))
        // get pixels for training data
        let output = ""
        for (let j in scaledDigitAlphas[i]) {
            output += parseFloat(scaledDigitAlphas[i][j]).toFixed(2)
            output += ","
        }
        // console.log(output)
    }

    // console.log(scaledDigitAlphas)
    return scaledDigitAlphas
}

/**
 * Helper that extracts pixels from a canvas into an array of brightness values. Each element in the array will be a
 * float between 0 and 1. Scales down the image to 8 by 8 pixels before obtaining the array.
 * @param canvas The canvas
 * @param canvasWidth The width of the canvas
 * @param canvasHeight The height of the canvas
 */
export function getPixelsArrayFromCanvas(canvas, canvasWidth, canvasHeight) {
    const context = canvas.getContext("2d")
    const newCanvas = document.createElement("CANVAS")
    const newContext = newCanvas.getContext("2d")
    newCanvas.width = canvasWidth
    newCanvas.height = canvasHeight
    newContext.drawImage(canvas, 0, 0, 8, 8)
    console.log(newCanvas.toDataURL('image/png'))

    const scaledDownImage = newContext.getImageData(0, 0, 8, 8).data
    // extract alpha values from data
    const alphas = getAlphas(scaledDownImage)

    // get pixels for training data
    let output = ""
    for (let i in alphas) {
        output += parseFloat(alphas[i]).toFixed(2)
        output += ","
    }
    console.log(output)

    return alphas
}

/**
 * Helper that extracts alphas from pixels array (the alpha is every fourth element.
 * @param pixelData The array of pixel data
 * @returns {[float]} The array of alphas
 */
function getAlphas(pixelData) {
    // extract alpha values from data
    const alphas = []
    for (let i = 0; i < pixelData.length; i ++) {
        // only every fourth value is the alpha, the other three are rgb values
        if ((i + 1) % 4 === 0) {
            // normalize
            alphas.push(pixelData[i] / 255)
        }
    }
    return alphas
}

/**
 * Converts arr to 2D array with specified size.
 * @param arr The array to convert
 * @param rowSize The size of each row
 */
function convertTo2DArray(arr, rowSize) {
    const newArr = []
    let j = 0
    let row = []
    for (let i in arr) {
        j ++
        row.push(arr[i])
        if (j >= rowSize) {
            j = 0
            newArr.push(row)
            row = []
        }
    }
    return newArr
}

/**
 * Convert 2D alpha array to Uint8ClampedArray.
 * @param arr The 2D array with pixel data
 */
function convertAlphasToClampedArray(arr) {
    const rows = arr.length
    const cols = arr[0].length
    const newArr = []
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j ++) {
            // rgb values, then alpha
            newArr.push(0)
            newArr.push(0)
            newArr.push(0)
            newArr.push(arr[i][j] * 255)
        }
    }
    return new Uint8ClampedArray(newArr)
}

/**
 * Creates a 2D array filled with zeroes.
 * @param rows Dimensions
 * @param cols Dimensions
 */
function get2DZeroesArray(rows, cols) {
    const arr = []
    for (let i = 0; i < rows; i ++) {
        const innerArr = []
        for (let j = 0; j < cols; j ++) {
            innerArr.push(0)
        }
        arr.push(innerArr)
    }
    return arr
}

/**
 * Given an array, return array of 2D arrays, each element representing one digit.
 * @param arr The array. This will be modified.
 */
function separateDigits(arr) {
    // arr has a number of digits. We need to extract each one.
    // Each digit is basically a blob of connecting pixels. Find all the blobs. Each time we find a blob, erase it.

    // array containing each digit, in order of left to right
    const digits = []

    // loop thru each pixel
    for (let col = 0; col < arr[0].length; col ++) {
        for (let row = 0; row < arr.length; row ++) {
            // Now, check if there is any pixel that is not 0 or 2 (2 means it is a part of a blob that we
            // found already, since flood fill algo should assign it to 2)
            if (arr[row][col] !== 0 && arr[row][col] !== 2) {
                // flood fill, starting with this pixel, and trim the result removing whitespace
                digits.push(trimCanvasArray(floodFill(arr, row, col)))
            }
        }
    }
    return digits
}

/**
 * Flood Fill is an algorithm that, when given an origin, finds all pixels that are connected to that origin.
 * This specific implementation finds all non-zero pixels that are connected to the origin. It will modify the original
 * array so that all the pixels connected to the origin will have their alphas changed to 2. It will also return a new
 * 2D array containing the connected pixels only (with all other pixels set to 0).
 * @param arr The array to perform this on
 * @param row The row index of the origin pixel
 * @param col The col index of the origin pixel
 */
function floodFill(arr, row, col) {
    const origin = arr[row][col]
    if (origin === 0 || origin === 2) {
        return
    }
    const numCols = arr[row].length
    const eastEdge = numCols-1

    const queue = []
    queue.push([row, col])

    // 2D array representing new canvas to put the results of this flood fill digit
    const newCanvasArr = get2DZeroesArray(arr.length, numCols)

    while (queue.length > 0) {
        const currentPixel = queue.pop()
        const currentRow = currentPixel[0]
        const currentCol = currentPixel[1]
        let w = currentCol
        let e = currentCol

        let keepMovingWest = true
        // go as far to the west and to the east as possible
        do {
            // keep going West for as long as we find coloured pixels
            if (w-1 < 0 || arr[currentRow][w-1] === 0 || arr[currentRow][w-1] === 2) {
                keepMovingWest = false
            } else {
                w --
            }
        } while(keepMovingWest)
        let keepMovingEast = true
        do {
            // keep going West for as long as we find coloured pixels
            if (e+1 > eastEdge || arr[currentRow][e+1] === 0 || arr[currentRow][e+1] === 2) {
                keepMovingEast = false
            } else {
                e ++
            }
        } while(keepMovingEast)

        // loop through all coloured pixels on this row
        for (let i = w; i <= e; i ++) {
            // we already looked at this pixel
            if (arr[currentRow][i] === 2) {continue}

            newCanvasArr[currentRow][i] = arr[currentRow][i]
            // reassign to 2, which means that this pixel is now known to be a part of a digit, so dont look at it again
            arr[currentRow][i] = 2
            // if pixel above is coloured, add it to the queue
            if (currentRow > 0 && (arr[currentRow - 1][i] !== 0 && arr[currentRow - 1][i] !== 2)) {
                queue.push([currentRow-1, i])
            }
            // do same for pixel below
            if (currentRow + 1 < arr.length && (arr[currentRow + 1][i] !== 0 && arr[currentRow + 1][i] !== 2)) {
                queue.push([currentRow + 1, i])
            }
        }
    }
    return newCanvasArr
}

/**
 * Trims the array that represents a canvas. Trims by removing whitespace from the top, left, bottom, and right margins.
 * @param arr The 2D array.
 */
function trimCanvasArray(arr) {
    const rows = arr.length
    const cols = arr[0].length
    let startRow = 0
    let startCol = 0
    let endRow = rows
    let endCol = cols

    // find North most row
    let foundValue = false
    for (let row = 0; row < rows; row ++) {
        for (let col = 0; col < cols; col ++) {
            if (arr[row][col] !== 0 && arr[row][col] !== 2) {
                startRow = row
                foundValue = true
                break
            }
        }
        if (foundValue) {break}
    }

    // find west most col
    foundValue = false
    for (let col = 0; col < cols; col ++) {
        for (let row = 0; row < rows; row ++) {
            if (arr[row][col] !== 0 && arr[row][col] !== 2) {
                startCol = col
                foundValue = true
                break
            }
        }
        if (foundValue) {break}
    }

    // find south most row
    foundValue = false
    for (let row = rows-1; row >= 0; row --) {
        for (let col = 0; col < cols; col ++) {
            if (arr[row][col] !== 0 && arr[row][col] !== 2) {
                endRow = row
                foundValue = true
                break
            }
        }
        if (foundValue) {break}
    }

    // find east most col
    foundValue = false
    for (let col = cols-1; col >= 0; col --) {
        for (let row = 0; row < rows; row ++) {
            if (arr[row][col] !== 0 && arr[row][col] !== 2) {
                endCol = col
                foundValue = true
                break
            }
        }
        if (foundValue) {break}
    }

    // add some whitespace in the west if the result will be a digit that is too narrow
    // const ratio = (endCol - startCol) / (endRow - startRow)
    // console.log(ratio)
    // if (ratio < minWidthHeightRatio) {
    //     // startCol = Math.max(0, startCol - 25)
    //     // startCol -= 30
    //     // endCol += 30
    // }

    // copy over to trimmed array
    const trimmedArr = []
    for (let row = startRow; row <= endRow; row ++) {
        const trimmedRow = []
        for (let col = startCol; col <= endCol; col ++) {
            trimmedRow.push(arr[row][col])
        }
        trimmedArr.push(trimmedRow)
    }
    return trimmedArr
}