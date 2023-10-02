import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyBplxY2F0reTc1d1IwKB0-Qnw3AUSHIP-w',
  authDomain: 'sendfirebase-f3c2f.firebaseapp.com',
  projectId: 'sendfirebase-f3c2f',
  storageBucket: 'sendfirebase-f3c2f.appspot.com',
  messagingSenderId: '703524259578',
  appId: '1:703524259578:web:61897b97bb6196fb3feb43',
  measurementId: 'G-EZ3T926Y4K',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

export const requestPermission = () => {
  console.log('Requesting User Permission......')
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification User Permission Granted.')

      return getToken(messaging, { vapidKey: process.env.VALID_KEY })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Client Token: ', currentToken)
          } else {
            console.log('Failed to generate the app registration token.')
          }
        })
        .catch((err) => {
          console.log('An error occurred when requesting to receive the token.', err)
        })
    } else {
      console.log('User Permission Denied.')
    }
  })
}

requestPermission()

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload)
    })
  })
