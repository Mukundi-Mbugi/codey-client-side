import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAC0Aib9Awtv38AvF8AHy5nUksaZB0E1XU",
    authDomain: "codey-blogsite.firebaseapp.com",
    projectId: "codey-blogsite",
    storageBucket: "codey-blogsite.appspot.com",
    messagingSenderId: "314046362802",
    appId: "1:314046362802:web:59d5d2fd65b934d64605ab",
    measurementId: "G-VQDEHBXWWK"
  };
  
  const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export default app;