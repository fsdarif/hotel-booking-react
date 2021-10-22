import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase.config";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './Login.css';

import firebase from "firebase/app";
import "firebase/auth";

// import firebase from 'firebase'
// require('firebase/auth')



const Login = () => {
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const [loginUser, setLoginUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    //Google Handle Button
    const googleHandle = () => {
            const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            setLoginUser(user);
            history.replace(from);
        })
            
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    };

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            // Send token to your backend via HTTPS
            // ...
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div className="login">
            <h1>This is Login</h1>
            {/* <img style={{borderRadius:'50%', width:'5%', }} src={loginUser.photoURL} alt="" />
            <p>{loginUser.displayName}</p>
            <p>{loginUser.email}</p> */}

            <button onClick={googleHandle}>Google SignIn</button>
        </div>
    );
};

export default Login;