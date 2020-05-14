import React from 'react'
import zero_digits from "./files/zero_digits"
import one_digits from "./files/one_digits"
import two_digits from "./files/two_digits"
import three_digits from "./files/three_digits"
import four_digits from "./files/four_digits"
import five_digits from "./files/five_digits"
import six_digits from "./files/six_digits"
import seven_digits from "./files/seven_digits"
import eight_digits from "./files/eight_digits"
import nine_digits from "./files/nine_digits"

/**
 * Classifier that can predict data point using KNN. Uses l2 distance (euclidean distance) for predictions.
 */
class KNNClassifier {

    constructor() {
        let data = this._extract_data()
        this.train_data = data[0]
        this.train_labels = data[1]
    }

    /**
     * Calculates l2 distance (euclidean distance) between test point and all training points.
     * @param test_point The point to test.
     */
    l2_distance(test_point) {
        let distances = [this.train_data.length]
        for (let i = 0; i < this.train_data.length; i ++) {
            let data_point = this.train_data[i]
            let sum = 0
            for (let j = 0; j < data_point.length; j ++) {
                sum += Math.pow((data_point[j] - test_point[j]), 2)
            }
            distances[i] = Math.sqrt(sum)
        }
        return distances
    }

    /**
     * Predicts class of the test point.
     * @param test_point The point to test.
     * @param k k nearest points.
     */
    predict(test_point, k) {
        let distances = this.l2_distance(test_point)

        let sorted_indices = this._get_indices_from_sort(distances)

        // obtain sorted labels
        let sorted_labels = []
        for (let i in sorted_indices) {
            const index = sorted_indices[i]
            sorted_labels.push(this.train_labels[index])
        }

        // determine which elements most common among k smallest elements
        let occurances = {}
        let highest_occurance = 0
        let most_probable_label = null
        for (let i in sorted_labels) {
            const label = sorted_labels[i]
            if (label in occurances) {
                occurances[label] += 1
            } else {
                occurances[label] = 1
            }
            if (occurances[label] > highest_occurance) {
                highest_occurance = occurances[label]
                most_probable_label = label
            }
            // found k nearest elements
            k -= 1
            if (k === 0) {
                break
            }
        }
        return most_probable_label
    }

    /**
     * Returns array of indices such that first element is the index to the smallest element, the second is the index
     * to the second smallest element, etc.
     * @param array The array to get indices for
     */
    _get_indices_from_sort(array) {
        let array_with_indices = [];
        for (let i in array) {
            array_with_indices.push([array[i], i]);
        }
        array_with_indices.sort(function(left, right) {
            return left[0] < right[0] ? -1 : 1
        });
        let indices = []
        for (let i in array_with_indices) {
            indices.push(array_with_indices[i][1])
        }
        return indices
    }

    _extract_data() {
        let trainData = []
        let trainLabels = []

        let zero_digits_arr = zero_digits.split("\n")
        let one_digits_arr = one_digits.split("\n")
        let two_digits_arr = two_digits.split("\n")
        let three_digits_arr = three_digits.split("\n")
        let four_digits_arr = four_digits.split("\n")
        let five_digits_arr = five_digits.split("\n")
        let six_digits_arr = six_digits.split("\n")
        let seven_digits_arr = seven_digits.split("\n")
        let eight_digits_arr = eight_digits.split("\n")
        let nine_digits_arr = nine_digits.split("\n")

        extractDigits(zero_digits_arr, 0, trainData, trainLabels)
        extractDigits(one_digits_arr, 1, trainData, trainLabels)
        extractDigits(two_digits_arr, 2, trainData, trainLabels)
        extractDigits(three_digits_arr, 3, trainData, trainLabels)
        extractDigits(four_digits_arr, 4, trainData, trainLabels)
        extractDigits(five_digits_arr, 5, trainData, trainLabels)
        extractDigits(six_digits_arr, 6, trainData, trainLabels)
        extractDigits(seven_digits_arr, 7, trainData, trainLabels)
        extractDigits(eight_digits_arr, 8, trainData, trainLabels)
        extractDigits(nine_digits_arr, 9, trainData, trainLabels)

        return [trainData, trainLabels]
    }
}

function extractDigits(raw_data, digit, trainDataArr, trainLabelArr) {
    for (let i in raw_data) {

        if (raw_data[i] === "") {
            continue
        }
        let pixels = raw_data[i].split(",").map(function (item) {
            return parseFloat(item)
        })
        trainLabelArr.push(digit)
        trainDataArr.push(pixels)
    }
}

export default KNNClassifier
