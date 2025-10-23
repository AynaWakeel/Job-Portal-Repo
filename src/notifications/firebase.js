// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBFY4T1xzOZ4QWE939FZNTIAVzdM0oPtDY",
  authDomain: "my-job-portal-1f9a4.firebaseapp.com",
  projectId: "my-job-portal-1f9a4",
  storageBucket: "my-job-portal-1f9a4.firebasestorage.app",
  messagingSenderId: "1035232274081",
  appId: "1:1035232274081:web:d16a2da540d29f1f0cb2e0",
  measurementId: "G-D1RHECKJDF"
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