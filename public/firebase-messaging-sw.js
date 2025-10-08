
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBFY4T1xzOZ4QWE939FZNTIAVzdM0oPtDY",
  authDomain: "my-job-portal-1f9a4.firebaseapp.com",
  projectId: "my-job-portal-1f9a4",
  storageBucket: "my-job-portal-1f9a4.firebasestorage.app",
  messagingSenderId: "1035232274081",
  appId: "1:1035232274081:web:d16a2da540d29f1f0cb2e0",
  measurementId: "G-D1RHECKJDF"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});