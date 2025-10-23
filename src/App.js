import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './app-routes';
import { generateToken, messaging } from './notifications/firebase';
import { onMessage } from 'firebase/messaging';
import { showSuccess } from './components/toasters';
import { connectSocket, disconnectSocket, socket } from './lib/socket/socket';

function App() {

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setTimeout(() => generateToken(token), 1000);
  }

  onMessage(messaging, (payload) => {
    console.log(payload);
    showSuccess(payload.notification.body);
  });
}, []);

useEffect(() => {
  connectSocket();
  return () => disconnectSocket();
}, []);

useEffect(() => {
  if (!socket) return;
  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);
  });
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
}, [socket]);


useEffect(() => {
  if (!socket) return;
  const myId = localStorage.getItem("id");
  if (myId) {
    socket.emit("join", myId);
    console.log("Joined socket room as user:", myId);
  }
}, [socket]);


  return (
    <div>

      <AppRoutes />

    </div>
  );
}

export default App;
