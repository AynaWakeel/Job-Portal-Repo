import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './app-routes';
import { generateToken, messaging } from './notifications/firebase';
import { onMessage } from 'firebase/messaging';
import { showSuccess } from './components/toasters';

function App() {

  // useEffect(() => {
  //   generateToken()
  //   onMessage(messaging, (payload) => {
  //     console.log(payload);
  //     showSuccess(payload.notification.body)

  //   })
  // }, [])

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setTimeout(() => generateToken(token), 1000);
  }

   onMessage(messaging, (payload) => {
      console.log(payload);
      showSuccess(payload.notification.body)
   })

}, []);


  return (
    <div>

      <AppRoutes />

    </div>
  );
}

export default App;
