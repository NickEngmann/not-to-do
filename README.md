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
        authDomain: "{APP ID}.firebaseapp.com",
        databaseURL: "https://{APP ID}.firebaseio.com",
        projectId: "{APP ID}",
        storageBucket: "{APP ID}.appspot.com"
    }
};
```
environment.ts 
```
export const environment = {
    production: false,
    firebase: {
        apiKey: "{API_KEY}",
        authDomain: "{APP ID}.firebaseapp.com",
        databaseURL: "https://{APP ID}.firebaseio.com",
        projectId: "{APP ID}",
        storageBucket: "{APP ID}.appspot.com"
    }
};
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
