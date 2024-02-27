import { initializeApp, FirebaseApp, getApp } from 'firebase/app';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export let app: FirebaseApp;
// 지역변수로 사용

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

try {
  app = getApp('app');
} catch (e) {
  app = initializeApp(firebaseConfig, 'app');
}

// 처음에 App을 가져올때 initialize 되었다면 초기화된 app을 가져오고
// 그게 아니라면 초기화 하라는 의미
// import를 할때마다 initialize를 하는 것은 비효율적이기 때문에 try catch문을 사용하여 변경

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);

export default firebase;
