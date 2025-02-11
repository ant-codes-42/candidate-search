# Candidate Search

## Description

This web application utilizes the GitHub REST API to query GitHub user names as a mock "candidate"
search for potential hires. It utilizes React to display a valid profile that has a Name, Location,
and a Bio. Users can either select a candidate for further consideration, or remove the candidate from consideration to move on to the next potential. The second page will pull from localStorage to display all saved candidates which will allow review and further refinement by removing candidates from this list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

1. Clone this repo utilizing the green `<> Code` button to the folder of your choice. Optionally, download the source.

2. Create a [fine-grained personal access token on GitHub.](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)

3. Add this token to a .env file in the /environments folder as VITE_GITHUB_TOKEN.

4. Run 'npm i' to initialize and download dependencies. You will need Node.js which can be acquired from the [Node.js website.](https://nodejs.org)

5. Run 'npm run dev' to initialize the site locally. Deployment of the web app is outside the scope of these instructions (follow your platform of choice's documentation).

## Usage

[Live version of the website](https://bright-toffee-48e73e.netlify.app/)

The main page shows the current candidate. It may take a few moments to load as many people do not meet the criteria (Name, Location, and Bio filled out).

The buttons are fairly small (this is mainly a React / API demonstration, sorry). The left button will skip the 'candidate'. The right button will add the candidate to the potential candidates list in localStorage.

You can click on the Potential Candidates link at the top to view all of your saved candidates. The button in the table will remove that candidate permanently if you so choose.


## Contribute

[Please check out the repo here!](https://github.com/ant-codes-42/candidate-search)

## Questions

The author maintains a [GitHub account here](https://github.com/ant-codes-42).

## License

This work is licensed under the MIT License.

Copyright 2025 Anthony Schwab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
