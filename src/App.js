//N.B importing variable name first letter must be capital
// SignInWithGoogle is correct but signInWithGoogle isn't correct
import React from "react";
import "./App.css";
import SignInWithGoogle from "./signInWithGoogle";
import SignInWithFacebook from "./signInWithFacebook";
import SignWithTwitter from "./signInWithTwitter";
import SignInWithGithub from "./signInWithGithub";
import SignInWithEmail from "./signInWithEmail";

function App() {
  return (
    <div className="App">
      <h1 id="header">Login Or Register Yourself</h1>

      <SignInWithGoogle />
      <SignInWithFacebook />
      <SignWithTwitter />
      <SignInWithGithub />
      <SignInWithEmail />
    </div>
  );
}

export default App;
