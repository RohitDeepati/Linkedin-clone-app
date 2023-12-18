import React, { useState } from "react";
import "./login.css";
import lnkedinlog from "../../assets/images/linkedIn_PNG34.png";
import { auth } from "../FireBase/Firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  // const register = () => {
  //   if (!name) {
  //     return alert("Please Enter Full Name");
  //   }

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userAuth) => {
  //       userAuth.user
  //         .updateProfile({
  //           displayName: name,
  //           photoURL: profilePic,
  //         })
  //         .then(() => {
  //           dispatch(
  //             login({
  //               email: userAuth.user.email,
  //               uid: userAuth.user.uid,
  //               displayName: name,
  //               photoURL: profilePic,
  //             })
  //           );
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error registering user:", error.code, error.message);
  //       alert(error);
  //     });
  // };

  const register = async () => {
    if (!name) {
      return alert("Please Enter Full Name");
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic,
        })
      );
    } catch (error) {
      console.error("Error registering user:", error.code, error.message);
      alert(error);
    }
  };

  const loginRegister = (e) => {
    e.preventDefault();
    // auth;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileURl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <React.Fragment>
      <div className="login">
        <img src={lnkedinlog} alt="" />

        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name(required if registering)"
            type="text"
          />
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile pic URl (optional)"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />

          <button type="submit" onClick={loginRegister}>
            Sign In
          </button>
        </form>
        <p>
          Not a memeber?{" "}
          <span className="login-register" onClick={register}>
            register Now
          </span>
        </p>
      </div>
    </React.Fragment>
  );
};
