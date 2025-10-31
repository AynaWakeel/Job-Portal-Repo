// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async()=>{
   const permission = await Notification.requestPermission()
   console.log(permission);

   if(permission === "granted"){
       
       const token = await getToken(messaging, {
        vapidKey: process.env.REACT_APP_NOTIFY_KEY });

    console.log(token);


    try{
      await axios.put(`${process.env.REACT_APP_API_URL}/api/notifications/save-token`,{
        fcmToken :token
      })
      console.log("token sent");
      
    }catch(err){
      console.log(err);
      
    }

   }



   
}