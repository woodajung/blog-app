// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export let app: FirebaseApp

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// VITE + React + TS에서는 proces 대신 import.meta.env를 사용해 .env 환경 변수를 가져오기 때문에 process.env.XXX 인식하지 못함
// 또한 Vite 는 env 변수 설정 시 접두사를 REACT_가 아니라 VITE_ 로 설정
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};

try {
  app = getApp("app")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e) {
  app = initializeApp(firebaseConfig);
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;