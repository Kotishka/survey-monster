import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhW2zqoLhEvRwB388THbaYbN9bE4NPGwk",
    authDomain: "survey-master-96ff0.firebaseapp.com",
    databaseURL: "https://survey-master-96ff0.firebaseio.com",
    projectId: "survey-master-96ff0",
    storageBucket: "survey-master-96ff0.appspot.com",
    messagingSenderId: "67711400710",
    appId: "1:67711400710:web:5c8effbdc83a917db9bc87",
    measurementId: "G-3LW5D6DCQJ"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }
}

export default Firebase;