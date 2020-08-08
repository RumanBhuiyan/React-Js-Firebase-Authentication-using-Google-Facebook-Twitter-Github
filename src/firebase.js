import firebase from "firebase";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};
// if(!firebase.app.length){
//   firebase.initializeApp(config)
// }
firebase.initializeApp(config);

//Google Authentication
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const GoogleAuth = firebase.auth();

//Facebook Authentication
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const FacebookAuth = firebase.auth();

//twitter Authentication
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
export const TwitterAuth = firebase.auth();

//Github Authentication
export const GithubProvider = new firebase.auth.GithubAuthProvider();
export const GithubAuth = firebase.auth();

export const auth = firebase.auth();

export default firebase;
