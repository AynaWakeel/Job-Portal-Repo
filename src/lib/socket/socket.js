import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: false,
});

export const connectSocket = () => {
  const token = localStorage.getItem("token");
  if (token && !socket.connected) {
    socket.auth = { token };
    socket.connect();
    console.log("Socket connected");
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
    console.log("Socket disconnected");
  }
};
