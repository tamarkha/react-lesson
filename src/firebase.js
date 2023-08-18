import firebase from 'firebase/app';
import 'firebase/storage'; 
  const firebaseConfig = {
    apiKey: "AIzaSyAR1h4Ol3feCFBLA95MBxV4uT_dqaJXc3o",
    authDomain: "services-f844e.firebaseapp.com",
    projectId: "services-f844e",
    storageBucket: "services-f844e.appspot.com",
    messagingSenderId: "147415690451",
    appId: "1:147415690451:web:3bf1f857a1878d8145f826"
  };
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
  export {storage};