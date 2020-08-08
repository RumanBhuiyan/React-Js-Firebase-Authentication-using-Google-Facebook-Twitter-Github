import React, { useState, useEffect } from "react";
import "./social.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GithubProvider, GithubAuth } from "./firebase";

export default function SignInWithGithub() {
  const [state, setState] = useState({
    username: "",
    url: "",
    user: null,
    buttonCheck: false,
  });

  useEffect(() => {
    GithubAuth.onAuthStateChanged((user) => {
      setState({
        username: user.displayName,
        url: user.photoURL,
        user: user.user,
        buttonCheck: true,
      });
    });
  }, []);

  const handleLogin = () => {
    GithubAuth.signInWithPopup(GithubProvider)
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
    GithubAuth.signOut()
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
        <button id="github-btn" className="button" onClick={handleLogout}>
          <i id="github" class="fab fa-github"></i>
          Log Out
        </button>
      ) : (
        <button id="github-btn" className="button" onClick={handleLogin}>
          <i id="github" class="fab fa-github"></i>
          Github
        </button>
      )}
    </div>
  );
}
