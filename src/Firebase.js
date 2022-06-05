import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCrFFbd17mj51V-OdDGy17wnmQHRcMTweM",
  authDomain: "app-station-2e143.firebaseapp.com",
  projectId: "app-station-2e143",
  storageBucket: "app-station-2e143.appspot.com",
  messagingSenderId: "147988193008",
  appId: "1:147988193008:web:fe4628a1b0da0bfd3aac35"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app 





