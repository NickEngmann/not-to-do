# NotToDo

Too often people focus on what they need to do and they disregard what they do Not have to do. Not-todo is made exactly for that! Enter what you do Not need to do and have twilio send you weekly reminders!

## Firebase

To enable firebase create a directory named environments "not-to-do/environments" and create two files

environment.prod.ts
```
export const environment = {
    production: true,
    firebase: {
        apiKey: "{API_KEY}",
        authDomain: "{PROJECT-ID}.firebaseapp.com",
        databaseURL: "https://{PROJECT-ID}.firebaseio.com",
        projectId: "{PROJECT-ID}",
        storageBucket: "{PROJECT-ID}.appspot.com"
    }
};
```
environment.ts 
```
export const environment = {
    production: false,
    firebase: {
        apiKey: "{API_KEY}",
        authDomain: "{PROJECT-ID}.firebaseapp.com",
        databaseURL: "https://{PROJECT-ID}.firebaseio.com",
        projectId: "{PROJECT-ID}",
        storageBucket: "{PROJECT-ID}.appspot.com"
    }
};
```

You can get all the awbove information from the Firebase development console of your Firebase project.

## Twilio
Initialize Firebase Cloud Functions

If you’re not already using Firebase Cloud Functions, you can get started by running:

`firebase init functions`

Then we will add the Twilio API key to the cloud function environment.

`firebase functions:config:set twilio.sid="YOUR_ACCOUNT_SID" twilio.token="YOUR_AUTH_TOKEN"`

Make sure you are in the functions directory, then install the twilio helper for NodeJS.

```
cd functions
npm install twilio --save
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
You also have to run `firebase deploy --only functions` in order to update your firebase function server.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
