import React, { useState, useEffect } from "react";
import "./social.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { auth } from "./firebase";

export default function SignInWithEmail() {
  //  const [state, setState] = useState({ gmail: "", password: "" });
  // const [update, setUpdate] = useState({ name: "", photo: "" });

  //  const handleChange = (event) => {
  //    if (event.target.name === "gmail") {
  //      setState({ ...state, gmail: event.target.value });
  //    } else {
  //      setState({ ...state, password: event.target.value });
  //    }
  // };

  //  const signUp = () => {
  //    auth
  //      .createUserWithEmailAndPassword(state.gmail, state.password)
  //      .then((result) => {
  //        console.log("Account Creation Successfull");
  //        setState({ gmail: "", password: "" });
  //      })
  //      .catch((error) => {
  //        console.log(error.message);
  //      });
  // };

  //  const signIn = () => {
  //    auth
  //      .signInWithEmailAndPassword(state.gmail, state.password)
  //      .then((response) => {
  //        console.log(response);
  //      })
  //      .catch((error) => {
  //        console.log(error.message);
  //      });
  // };

  //  const signOut = () => {
  //    auth.signOut().then(() => {
  //      console.log("Signed Out Successful");
  //    });
  // };

  //  const userInfo = () => {
  //    const user = auth.currentUser;
  //    user.updateProfile({
  //      displayName: update.name,
  //      photoURL: update.photo,
  //    });
  // };

  //  const updateChange = (event) => {
  //    if (event.target.name === "name") {
  //      setUpdate({
  //        ...update,
  //        name: event.target.value,
  //      });
  //    } else {
  //      setUpdate({
  //        ...update,
  //        photo: event.target.value,
  //      });
  //    }
  // };

  //  const updateEmail = () => {
  //    const user = auth.currentUser;
  //    user
  //      .updateEmail("efgh@gmail.com")
  //      .then(() => {
  //        console.log("Updation Successfull");
  //      })
  //      .catch((error) => {
  //        console.log(error.message);
  //      });
  // };

  //  const updatePassword = () => {
  //    const user = auth.currentUser;
  //    user
  //      .updatePassword("456789")
  //      .then(() => {
  //        console.log("Password Updated");
  //      })
  //      .catch((error) => {
  //        console.log(error.message);
  //      });
  // };

  //  const verifyEmail = () => {
  //    const user = auth.currentUser;
  //    user
  //      .sendEmailVerification()
  //      .then(() => {
  //        console.log("Email Sent");
  //      })
  //      .catch((error) => {
  //        console.log(error.message);
  //      });
  // };

  //  const resetPassword = () => {
  //    let email = "roughrafi076@gmail.com";
  //    auth
  //      .sendPasswordResetEmail(email)
  //      .then(() => {
  //        console.log("Check Your Email Please!");
  //      })
  //      .catch((error) => {
  //        console.log(error.message);
  //      });
  // };

  //  useEffect(() => {
  //    auth.onAuthStateChanged((user) => {
  //      console.log(user);
  //      console.log(user.displayName);
  //      console.log(user.photoURL);
  //    });
  //  }, []);

  return (
    <div>
      {/* <label>Your Gmail : </label>
      <input type="text" name="gmail" onChange={handleChange} /> <br /> <br />
      <label>Your Password : </label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
      /> <br /> <br />
      <label>New Name: </label>
      <input type="text" name="name" onChange={updateChange} /> <br />
      <label>Your Photo URL: </label>
      <input type="text" name="photo" onChange={updateChange} /> <br />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={userInfo}>Update UserInfo</button> <br />
      <button onClick={updateEmail}>Update Email</button>
      <button onClick={verifyEmail}>Verify Email</button>
      <button onClick={updatePassword}>Update Password</button>
      <button onClick={resetPassword}>Reset Password</button>
      <img src={update.photo} alt="Error Loading" /> */}

      <button id="mail-btn" className="button">
        <i id="mail" class="fas fa-envelope"></i>
        Email
      </button>
    </div>
  );
}
