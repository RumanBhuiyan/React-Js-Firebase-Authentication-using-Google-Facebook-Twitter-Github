import React, { useState, useEffect } from "react";
import "./social.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TwitterProvider, TwitterAuth } from "./firebase";

export default function SignInWithTwitter() {
  const [state, setState] = useState({
    username: "",
    url: "",
    user: null,
    buttonCheck: false,
  });

  useEffect(() => {
    TwitterAuth.onAuthStateChanged((user) => {
      setState({
        username: user.displayName,
        url: user.photoURL,
        user: user.user,
        buttonCheck: true,
      });
    });
  }, []);

  const handleLogin = () => {
    TwitterAuth.signInWithPopup(TwitterProvider)
      .then((result) => {
        setState({
          username: result.user.displayName,
          url: result.user.photoURL,
          user: result.user,
          buttonCheck: true,
        });
        console.log(state);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const handleLogout = () => {
    TwitterAuth.signOut()
      .then(() => {
        setState({
          username: "",
          url: "",
          user: null,
          buttonCheck: false,
        });
        console.log("Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {state.user ? (
        <button id="twitter-btn" className="button" onClick={handleLogout}>
          <i id="twitter" class="fab fa-twitter"></i>
          Log Out
        </button>
      ) : (
        <button id="twitter-btn" className="button" onClick={handleLogin}>
          <i id="twitter" class="fab fa-twitter"></i>
          twitter
        </button>
      )}
    </div>
  );
}
