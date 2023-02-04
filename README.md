# Detector Inspector Software Engineer Challenge

Thank you for taking the time to complete this challenge. It helps us understand your experience and the way you approach and solve problems.

Please read the [CHALLENGE](CHALLENGE.md) document for the details of the challenge task.

## Getting started

We would recommend that you clone or download this repository to your local computer. Please don't fork the repository as others will be able to see your answers.

You can then create your own repository and copy this repository to that (exclude the `.git` folder).

## Submitting

If you have created your own repository please reply to the email you received with a link to your repository.

You can also send us back a `zip` file with your answers.

## Summarizing

**Main Flow**

The process can be demonstrated like following:

_Main program running **->** Check existing `output` directory and create **->** Evaluate URL and parsed
data **->** Plot data to bar graph and extracted to SVG-format string **->** Convert and save to PNG._ **->** End.

**Dependencies**

The dependencies including in this repo are:

_Web Scrapping_: [Puppeteer](https://pptr.dev/)

_Date&Time_: [MomentJS](https://momentjs.com/)

_Plotting_: [D3Node](https://www.npmjs.com/package/d3-node)

_File/Image Processing_: [fs](https://nodejs.org/api/fs.html)/[Sharp](https://www.npmjs.com/package/sharp)

_Unit Testing_:[Mocha](https://mochajs.org/)/[Sinon](https://sinonjs.org/)

_Miscellaneous_: [Lodash](https://lodash.com/)/[dotenv](https://www.npmjs.com/package/dotenv)/[colors](https://www.npmjs.com/package/colors)


## Running Instruction

**Step 1**

Please make sure you have installed the NodeJS Engine ([Link](https://nodejs.org/en/)) already

Clone this repo through `SSH` or `HTTPS` protocol.

**Step 2**

Run this command `npm i` in the repo command line interface to install dependencies

Copy the file `.env.example` to the new file `.env` and copy the wikipedia URL in [CHALLENGE](CHALLENGE.md)
into the value `URL` of environment file.

**Step 3**

- Run this command `npm run start` to run the process and check the `output` folder inside the repo directory for
  2 plotted bar graphs in `.svg` and `.png` extensions.

- Run this command `npm run test` for running Unit Testing.
