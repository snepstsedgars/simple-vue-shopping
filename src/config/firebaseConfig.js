import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAfp2AbaPngFz5UMAOFCX8-AgibMrwsajM",
  authDomain: "simple-vue-shopping-199e7.firebaseapp.com",
  databaseURL: "https://simple-vue-shopping-199e7-default-rtdb.firebaseio.com/"
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
