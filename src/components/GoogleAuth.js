import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase';

const auth = getAuth(app)

const GoogleAuth = () => {
    const [user, setUser] = useState("")
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((res) => {
            const user = res.user;
            console.log(user);
            setUser(user)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign out successfully");
            setUser("")
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In</button>
            <button onClick={handleGoogleSignOut}>Sign Out</button>

            <div>
                <h3>UserName: {user.displayName}</h3>
                <h5>UserEmail: {user.email}</h5>
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default GoogleAuth;