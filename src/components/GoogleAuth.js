import React from 'react';
import { getAuth } from "firebase/auth";

const auth = getAuth()

const GoogleAuth = () => {
    return (
        <div>
            <button>Sign In</button>
        </div>
    );
};

export default GoogleAuth;