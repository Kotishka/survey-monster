# Survey Monster

## Table of Contents

* [About](#about)
* [Technologies](#technologies)
* [Guides Followed](#guides-followed)
* [Learning Experiences](#learing-experiences)
* [Setup](#setup)
* [Running the Project](#running-the-project)
* [Sample Account](#sample-account)
* [UI](#UI)

## About

This is a sample app for a programming assignment in CS 4261. The goal is to use a new framework to help deploy an app, including React into the project, adding a RESTful Service, and add a few interesting components that Ionic provides. In general, the app's idea is to let a user to take and create surveys.

Currently you may see the app here: [https://survey-master-96ff0.web.app/](https://survey-master-96ff0.web.app/)

## Technologies

* Ionic Mobile App Framework
* React 16.13.0
* Firebase (RESTful API) 7.19.0
* Node v14.7.0
* npm 6.14.7

## Guides Followed

* [Ionic Framework Start Developing](https://ionicframework.com/docs/developing/starting)
* [Google Firebase Setup](https://firebase.google.com/docs/web/setup#create-firebase-project)
* [Firebase React Authentication Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
* [Ionic Framework Deploying to Android](https://ionicframework.com/docs/developing/android)
* [Codesandbox Sample Typescript App with log](https://codesandbox.io/s/ionicreacttabsso-1zmny?file=/src/App.tsx)
* [Youtube Ionic React Firebase Sample App Walkthrough](https://www.youtube.com/watch?v=q_fqvkyvbNg)

## Learning Experiences

* Learning the basics of a new framework, Ionic
* Expanding my knowledge on React
* Learning parts of Typescript
* Debugging new issues
* Adding login and sign up pages
* Adding Password Authentication using Firebase
* Adding a signout feature
* Hosting the app on a website
* Learning how to deploy the app onto Android
* Adding features such as alerts through Ionic

## Setup

1. Make sure that Node and npm are are the latest version.

    Run the following in a new terminal window:

    ```(bash)
    node -v
    npm -v
    ```

    Node should be at least v12.18.3 and npm should at least be 6.14.6. To download the latest verison, go to [nodejs.org/en/download/](nodejs.org/en/download/).

2. Install Ionic CLI with npm:

    ```(bash)
    npm install -g @ionic/cli
    ```

3. Install React Scripts with npm in the survey-monster directory:

    ```(bash)
    npm install react-scripts
    ```

It may show some error message about dependencies, but let it run and it should work.

Now you can run the project!

## Running the Project

You may deploy the project either locally on web browser or see the website here: [https://survey-master-96ff0.web.app/](https://survey-master-96ff0.web.app/). Please make sure that you have the setup requirements before running the project.

Run this in a new terminal window, in the project directory to host the project locally:

```(bash)
ionic serve
```

Go to [localhost:8100](localhost:8100) to see the project.

## Sample Account

Because the app is using a login feature, you may use the following account:

```(bash)
Email: yboyko3@gatech.edu
Password: 123456
```

## UI

![Welcome Page](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/Home.PNG "Welcome Page")
![Login Page](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/Login.PNG "Login Page")
![Sign up Page](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/SignUpPage.PNG "Sign Up Page")
![Error Alert](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/Passwordsdonotmatch.PNG "Error Alert")
![Current Surveys Page](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/CurrentSurveys.PNG "Current Surveys Page")
![First Surveys Page](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/FirstSurvey.PNG "First Surveys Page")
![Create Surveys Page](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/CreatePage.PNG "Create Surveys Page")
![Profile Page](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/ProfilePage.PNG "Profile Page")
![Firebase Users](https://raw.githubusercontent.com/Kotishka/survey-monster/master/resources/FirebaseUsers.PNG "Firebase Users")
