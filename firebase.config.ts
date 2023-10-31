import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

const envs = {
  FIREBASE_API_KEY: "AIzaSyAj-DNqDw7aAgQ3cU2dFtzXdM2pZKRUKkQ",
  FIREBASE_AUTH_DOMAIN: "ll-v2-4a68f.firebaseapp.com",
  FIREBASE_DATABASE_URL: "SOMETOKEN",
  FIREBASE_PROJECT_ID: "ll-v2-4a68f",
  FIREBASE_STORAGE_BUCKET: "ll-v2-4a68f.appspot.com",
  FIREBASE_MESSAGING_SENDER_ID: "534665301461",
  FIREBASE_APP_ID: "1:534665301461:web:1d700423fa92d1a629c15c",
  FIREBASE_MEASUREMENT_ID: "G-VN97050FP7",
};

// Initialize Firebase
export const firebaseConfig = {
  apiKey: envs.FIREBASE_API_KEY,
  authDomain: envs.FIREBASE_AUTH_DOMAIN,
  projectId: envs.FIREBASE_PROJECT_ID,
  storageBucket: envs.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envs.FIREBASE_MESSAGING_SENDER_ID,
  appId: envs.FIREBASE_APP_ID,
  measurementId: envs.FIREBASE_MEASUREMENT_ID,
};
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}
export const fbApp = getApp();
export const fbStorage = getStorage(fbApp);
export const fbStorageRef = ref(fbStorage, "dealershipVehicles/");

export const uploadImage = (file: any) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(fbStorage, `dealershipVehicles/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};
