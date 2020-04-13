import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "XXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXX"
});

export default app;