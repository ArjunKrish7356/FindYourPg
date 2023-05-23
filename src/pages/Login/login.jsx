import React from "react";
import "./login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const navigate = useNavigate();
  async function handleSignIn() {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    navigate('/dashboard')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
  return (
    <div className='login'>
        <div className="login-setup">
            <div className="login-setup-nav">
                <a href="/">Go back</a>
            </div>
                <div className="login-setup-outcont">
                    <div className="login-setup-inncont">
                        <h1>FindYourPg
                        </h1>
                        <p>
            Find your perfect PG in seconds with PGFind <br></br>The ultimate
            time-saving app for locating nearby PG!
          </p>
          <button className='sign-in' onClick={handleSignIn}>
              <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
              ></img><p> Sign in with Google</p>
          </button>

                    </div>
                </div>
            

        </div>
        <div className="login-image">
            <img src="https://th.bing.com/th/id/OIP.VJ5h1tKOACkxhdmomX9M0wHaFN?pid=ImgDet&rs=1" alt="" />
        </div>
    </div>
  )
}