//N.B class name function name first letter will be capital otherwise app wont run
// Infact at the time of importing something variable name's first letter must be capital too
import React, { useState, useEffect } from "react";
import "./social.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleProvider, GoogleAuth } from "./firebase";

export default function SignInWithGoogle() {
  const [state, setState] = useState({
    username: "",
    url: "",
    user: null,
    buttonCheck: false,
  });

  useEffect(() => {
    GoogleAuth.onAuthStateChanged((user) => {
      setState({
        username: user.displayName,
        url: user.photoURL,
        user: user.user,
        buttonCheck: true,
      });
    });
  }, []);

  const handleLogin = () => {
    GoogleAuth.signInWithPopup(GoogleProvider)
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
    GoogleAuth.signOut()
      .then(() => {
        setState({
          username: "",
          url: "",
          user: null,
          buttonCheck: false,
        });
        console.log("Signed Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {state.user ? (
        <button id="google-btn" className="button" onClick={handleLogout}>
          <i id="google" class="fab fa-google-plus-g"></i>
          Sign Out
        </button>
      ) : (
        <button id="google-btn" className="button" onClick={handleLogin}>
          <i id="google" class="fab fa-google-plus-g"></i>
          Google
        </button>
      )}
    </div>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       url: "",
//       user: null,
//       buttonCheck: false,
//     };
//   }
//   componentDidMount() {
//     auth.onAuthStateChanged((user) => {
//       this.setState({
//         username: user.displayName,
//         url: user.photoURL,
//         user: user.user,
//         buttonCheck: true,
//       });
//     });
//   }
//   handleLogin = () => {
//     auth
//       .signInWithPopup(provider)
//       .then((result) => {
//         this.setState({
//           username: result.user.displayName,
//           url: result.user.photoURL,
//           user: result.user,
//           buttonCheck: true,
//         });
//       })
//       .catch(function (error) {
//         console.log(error.message);
//       });
//   };
//   handleLogout = () => {
//     auth
//       .signOut()
//       .then(() => {
//         this.setState({
//           username: "",
//           url: "",
//           user: null,
//           buttonCheck: false,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         {state.user ? (
//           <button id="google-btn" className="button" onClick={handleLogout}>
//             <i id="google" class="fab fa-google-plus-g"></i>
//             Sign Out
//           </button>
//         ) : (
//           <button id="google-btn" className="button" onClick={handleLogin}>
//             <i id="google" class="fab fa-google-plus-g"></i>
//             Google
//           </button>
//         )}
//       </div>
//     );
//   }
// }
