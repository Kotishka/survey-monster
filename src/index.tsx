import React, { createContext, FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDhW2zqoLhEvRwB388THbaYbN9bE4NPGwk",
    authDomain: "survey-master-96ff0.firebaseapp.com",
    databaseURL: "https://survey-master-96ff0.firebaseio.com",
    projectId: "survey-master-96ff0",
    storageBucket: "survey-master-96ff0.appspot.com",
    messagingSenderId: "67711400710",
    appId: "1:67711400710:web:5c8effbdc83a917db9bc87",
    measurementId: "G-3LW5D6DCQJ",
});

export const auth = firebase.auth();

// confused on this portion.. i believe this is to create one user
// to share on all the pages.
export const UserContext = createContext<User | null>(null);
const UserProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => setUser(userAuth));
    }, [])

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>,
    document.getElementById('root'));

serviceWorker.register();
