This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

## Task done for Sr. Frontend Developer

## Prerequisites

Make sure you have updated version of node and npm install in your system

## To install dependency

Go to root directory of the project and do
cd client and then do
`npm install`

## Available Scripts

In the project client directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

To run the server locally: `npm run start`

To run the test cases : `npm run test`

### Delivery and Implementation Approach for the Task

## Technical and project structure

- Project is bootstrapped with Create React App and Added few of the dependency such as redux for store management and jest as an unit test cases framework.
- App is structured in modular design pattern (Rail Pattern) which consist of src folder which is having components ,container, reducer , actions ,utils and constant files.
- Components are dump component which gets prop from container component.
- App Container is responsible to render Game components and providing data as a props to it which in terms rendering Header,Match,Poll and PollData Components.
- Storing the score object in redux store for communication till browser doen't refresh , once it is refresh reducer will have intial state of scores from localStorage.
- Added snapshot test cases for components and reducer using jest and enzyme in order to make sure my data(scores) is updating correctly.

## Implementation approach on UI

- I assumed each refresh of a browser is corresonding to different users and they will be able to have a look on cummulative pridictions data given by all user for a particular match on the board.
- UI shows three sections first shows data related to match information , second shows polling option and Third shows Match Predictions for users.
- Once users polls ,their response gets updated for the particular match and get reflected on Ui in Prediction section.
- Users need to refresh the page In order to fetch next random match and it will show predictions data if it is polled before by any other user otherwise it will show NA(not available).
- Written few of the unit test cases for components and reducer only as per the time constraint.
- Used hooks useState ,useEffect , useSelector and useDispatch.
- Redux is used to get and update the data form localStorage and connected with components so that it can pass related props on it.
- Screen is responsive across various devices such as mobile, tablet and laptop/desktop.

## Troubleshooting areas on the task

- There were few areas within the task which were not 100 percrent clear to me but later on I manage to understand and implemented UI as per my understanding . (Analysis and Understanding took 2-2.5 hr of productive time of mine )
- I have developed the application using VS Code tool.
- Updating data on browser refresh and getting back on landing page was tricky( It took little more time for me to handle it through willmount and willunmount behaviour of hooks as it was bit tricky)(2-3 hrs)
- UI and structured component Design took me around (2-3 hrs )
- Overall it took me around (8-12 hrs of development productive time and 1 hr for unit testing)
