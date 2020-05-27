
export const aboutMeBrief = "Hello! I am Brandon, and I am a (aspiring) software developer currently based in the Greater Toronto Area. " +
    "Although I am still currently a third year Computer Science Student, I am eager to get out into the field once I graduate." +
    " My Resume is available at the bottom of the page."

// const aboutMeBrief = "Hello! I am Brandon, and I am a software developer currently based in the Greater Toronto Area. " +
//     "I am currently a third year Computer Science Student at the University of Toronto. I started programming when I was" +
//     " in high school; at first teaching myself, but afterwards getting formal instruction on it. "

export const myEducationInfo = "Computer Science student at the University of Toronto."

export const myWorkExperienceInfo = "I have had many jobs in the past, but my first \"serious\" one is at Environment and " +
    "Climate Change Canada, which is where I am currently working as a Software Developer intern."

export const myProgrammingLanguages = "Java, JavaScript, Python, SQL, CSS, and C."

export const myProjectsExperience = "I have worked on a variety of different projects in my spare time. I have created many mobile apps," +
    " some desktop apps, and a few web apps. More details are provided in the 'My Projects' section."

export const myHobbiesAndInterests = "Aside from programming, I also have a passion for reading; I am a bit of a bookworm." +
    " My favourite series is J.R.R. Tolkien`s \"Lord of the Rings\", although I also enjoy Science Fiction novels" +
    " by authors such as H.G. Wells. Other than that, I love playing video games, especially those in the " +
    "Grand Strategy genre. "

export const emailAddress = "brandon.dang1234@gmail.com"

export const myProjectsDescription = "Here, you can view some of the personal projects that I have worked on over the " +
    "years. I use some of them everyday in my day-to-day life."

export const digitClassifierDescription = "Here is an interactive demo of a very simple digit classifier that I created." +
    " The program examines hand-written numbers and tries to determine what digit it is that the user wrote. You can" +
    " try it out below. For best results, please try to write as clearly as possible."

export const classifierDialogErrorText = "Do note that this classifier is by no means perfect. For best results, it is" +
    " recommended to write as legibly as possible. "

export const test = "Here is a fun little project that I created in my spare time. It identifies numbers that the user" +
    " writes down. Although there are probably machine learning libraries out there that can help in this, I decided to " +
    "write all of the logic and code from scratch and see how well it can perform. You can try it out below. For best results," +
    " please try to write as legibly as possible.   When the user submits, the number of digits they wrote needs to be determined." +
    "I just scanned the canvas from left to right until a pixel is found to be a part of a digit. When that happens, I used a heavily" +
    "modified version of the Flood-Fill algorithm to collect all the pixels that were a part of that particular blob/digit. " +
    "This was done until each blob of pixels on the canvas was found. " +
    "I used the KNN algorithm to classify each blob (I got the training" +
    "data from ... Since the training data was always 8-by-8 pixels, I had to first downscale each blob until it matched" +
    "that size) The KNN algorithm compared the blob to each digit in the dataset and based on that decides" +
    "what digit the blob most likely was.    It works reasonably well for most numbers. However, I had to solve many issues to get" +
    "it working. Firstly, the dataset was handwritten digits, but peoples writting using a mouse is slightly different, leading" +
    "to some classification errors. Identification of the digits 6 and 1 were especially error-prone. However, I manually wrote down" +
    "about a dozen digits to add to the dataset, and it solved most of these issues.   Limitations there must be some space between" +
    " each digit. messed up writing (like the ones seen in capchas) sometimes works, but sometimes does not"

export const websiteDescription = "This website was designed, laid out, and built entirely by myself. I used the" +
    " JavaScript React library to build the interactive UI. The icons were provided from the Material-UI library." +
    " This website is currently hosted on GitHub pages. "