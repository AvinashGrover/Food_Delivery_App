import {getApp, getApps,initializeApp}from "firebase/app"
import{getStorage} from "firebase/storage"




const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCCKET,
    messagingSenderId: process.env.REACT_APP_MESSEAGING_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const storage = getStorage(app);

  export{app, Storage};
