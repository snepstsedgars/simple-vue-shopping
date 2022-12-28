import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB_rekxP9IB9U2vJPnin1UvRv__t3kS0MY",
  authDomain: "fir-app-335320.firebaseapp.com",
  databaseURL: "https://firebase-app-335320-default-rtdb.firebaseio.com/"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
