import { initializeApp } from "firebase/app";

const app = initializeApp({
    apiKey: "AIzaSyATJJ6AcOrMldVmLcMKUqWrEzFY_M7jCxA",
    authDomain: "auth-f87cc.firebaseapp.com",
    projectId: "auth-f87cc",
    storageBucket: "auth-f87cc.appspot.com",
    messagingSenderId: "80262983362",
    appId: "1:80262983362:web:0aa55d5f534ceddf5e155b"
});

// const app = initializeApp({
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID
// });

export default app;