import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function Login() {
  const [password, setPassword] = useState(false);

  const handleClickpassword = () => setPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/cart");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <div className="main-login">
        <div className="login-left">
          <img
            className="im"
            src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="React Image"
          />
        </div>
        <div className="login-right">
          <Link to="/">
            <img className="login_logo" />
          </Link>
          <div className="login_container">
            <h1> Create Account </h1>
            <form>
              <div className="name">
                <MailOutlineIcon size="small" className="p1" />
                <TextField
                  className="l1"
                  label="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                />
              </div>
              <br />
              <div className="password">
                <FormControl variant="standard">
                  <InputLabel>Password</InputLabel>
                  <Input
                    className="pass"
                    type={setPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <VisibilityOutlinedIcon position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickpassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {password ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </VisibilityOutlinedIcon>
                    }
                  />
                </FormControl>
              </div>
              <br />
            </form>
            <br />
            <div className="btns">
              <Button
                onClick={register}
                className="btn"
                size="small"
                variant="contained"
              >
                
                Create Account
              </Button>
              <br />
              <br />
              <Button
                onClick={signIn}
                className="btn"
                size="small"
                variant="contained"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

// import TextField from "@mui/material/TextField";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import React from "react";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import InputAdornment from "@mui/material/InputAdornment";
// import InputLabel from "@mui/material/InputLabel";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import FormControl from "@mui/material/FormControl";
// import Button from '@mui/material/Button';
// import "./Login.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//     <div className="container1">
//       <div className="Login">
//       <div className="main-login">
//         <div className="login-left">
//         <img className="im" src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//          alt="React Image" />
//         </div>
//         <div className="login-right">
//           <div className="t1">
//             <h2> Login </h2>
//           </div>
//           <div className="login-icon">
//             <div className="name">
//               <AccountCircle className="p1" />
//               <TextField className="l1" label="Name" variant="standard" />
//             </div>
//           </div>
//           <br />
//           <div className="password">
//             <FormControl variant="standard">
//               <InputLabel>Password</InputLabel>
//               <Input
//                 id="standard-adornment-password"
//                 type={showPassword ? "text" : "password"}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//               />
//             </FormControl>
//           </div>
//           <br />
//           <Button variant="contained"> Submit </Button>
//         </div>
//       </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Login;

// import React, { useState } from "react";

// const Login = () => {

//     const [email, setemail] = useState("");
//     const [password,setpassword] = useState("");

//   return (
//     <div className="Reg">
//       <h3> Login </h3>
//       <div className="Reg-1">
//         <label htmlFor=""> Email : </label>
//         <input type="email" placeholder="Name"
//         value={email} onChange={(e)=>setemail(e.target.value)}
//         />
//       </div><br/>
//       <div className="Reg-1">
//         <label htmlFor=""> Password : </label>
//         <input type="password" placeholder="Name"
//         value={password} onChange={(e)=>setpassword(e.target.value)}
//         />
//       </div><br/>
//       <button className="btn"> Login </button>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// // import styles from "./auth.module.scss";
// // import loginImg from "../../assets/login.png";
// import { Link, useNavigate } from "react-router-dom";
// // import Card from "../../components/card/Card";
// import {
// //   GoogleAuthProvider,
//   signInWithEmailAndPassword,
// //   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../components/firebase/config";
// import { toast } from "react-toastify";
// import Loader from "../components/firebase/Loader";
// // import { useSelector } from "react-redux";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
// //   const previousURL = useSelector(selectPreviousURL);
// //   const navigate = useNavigate();
// //   const redirectUser = () => {
// //     if (previousURL.includes("cart")) {
// //       return navigate("/cart");
// //     }
// //     navigate("/");
// //   };
//   const loginUser = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // const user = userCredential.user;
//         setIsLoading(false);
//         toast.success("Login Successful...");
//         // redirectUser();
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         toast.error(error.message);
//       });
//   };
//   // Login with Goooglr
// //   const provider = new GoogleAuthProvider();
// //   const signInWithGoogle = () => {
// //     signInWithPopup(auth, provider)
// //       .then((result) => {
// //         // const user = result.user;
// //         toast.success("Login Successfully");
// //         redirectUser();
// //       })
// //       .catch((error) => {
// //         toast.error(error.message);
// //       });
// //   };
//   return (
//     <>
//       {isLoading && <Loader />}
//       <section className='container'>
//         {/* <div className='styles'>
//           <img src={loginImg} alt="Login" width="400" />
//         </div> */}
//           <div className='form'>
//             <h2>Login</h2>
//             <form onSubmit={loginUser}>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit" className="--btn --btn-primary --btn-block">
//                 Login
//               </button>
//               <div className='links'>
//                 <Link to="/reset">Reset Password</Link>
//               </div>
//               <p>-- or --</p>
//             </form>
//             {/* <button
//               className="--btn --btn-danger --btn-block"
//               onClick={signInWithGoogle}
//             >
//               <FaGoogle color="#fff" /> Login With Google
//             </button>
//             <span className={styles.register}>
//               <p>Don't have an account?</p>
//               <Link to="/register">Register</Link>
//             </span> */}
//           </div>
//       </section>
//     </>
//   );
// };
// export default Login;
