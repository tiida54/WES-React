import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB50N1Wy-lB-RoT6OKJjE1GXwUxNfiQkdY",
    authDomain: "catch-of-the-day-david-0421.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-david-0421.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;