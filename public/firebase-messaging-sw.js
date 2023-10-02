// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: 'AIzaSyBplxY2F0reTc1d1IwKB0-Qnw3AUSHIP-w',
  authDomain: 'sendfirebase-f3c2f.firebaseapp.com',
  projectId: 'sendfirebase-f3c2f',
  storageBucket: 'sendfirebase-f3c2f.appspot.com',
  messagingSenderId: '703524259578',
  appId: '1:703524259578:web:61897b97bb6196fb3feb43',
  measurementId: 'G-EZ3T926Y4K',
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
