// frontend/src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Function to ask for notification permissions
function askForNotificationPermission() {
  Notification.requestPermission().then(result => {
    if (result === 'granted') {
      console.log('Notification permission granted.');
      // You would typically send the subscription object to your server here
    }
  });
}

// This part registers the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registered: ", registration);
        // Ask for notification permission after the service worker is ready
        setTimeout(askForNotificationPermission, 5000); // Delay for a better user experience
      })
      .catch((registrationError) => {
        console.log("Service Worker registration failed: ", registrationError);
      });
  });
}