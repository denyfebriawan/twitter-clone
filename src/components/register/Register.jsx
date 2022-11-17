import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Register.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const EMAIL_REGEX = /[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;


const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();
  const userNameRef = useRef();
  const { signup, update, currentUser } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [username, setUserName] = useState("");

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");


  // useEffect(() => {
  //     userRef.current.focus();
  // }, [])

  useEffect(() => {
    setValidName(EMAIL_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = username;
    // console.log(v3)
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      setErrMsg("");
      setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);
      await update(userNameRef.current.value);
      // const response = await axios.post(REGISTER_URL,
      //     JSON.stringify({ user, pwd }),
      //     {
      //         headers: { 'Content-Type': 'application/json' },
      //         withCredentials: true
      //     }
      // );
      // console.log(response?.data);
      // console.log(response?.accessToken);
      // console.log(JSON.stringify(response))
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
      navigate("/login");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      
        <div className="container">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <TwitterIcon className="container__icon" />
          <h1>Register Your Account</h1>
          <form onSubmit={handleSubmit}>


          <div className="box box-two">
              <label htmlFor="name">
               Name:
               
              </label>
              <input
                type="text"
                id="name"
                ref={userNameRef}
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <InfoIcon />
                Invalid email format.
                <br />
              </p> */}
            </div>

            <div className="box box-two">
              <label htmlFor="username">
                Email:
                <i className={validName ? "valid" : "hide"}>
                  <CheckIcon />
                </i>
                <i className={validName || !user ? "hide" : "invalid"}>
                  <CloseIcon />
                </i>
              </label>
              <input
                type="text"
                id="username"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <InfoIcon />
                Invalid email format.
                <br />
              </p>
            </div>

            <div className="box box-two">
              <label htmlFor="password">
                Password:
                <i className={validPwd ? "valid" : "hide"}>
                  <CheckIcon />
                </i>
                <i className={validPwd || !pwd ? "hide" : "invalid"}>
                  <CloseIcon />
                </i>
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                onChange={(e) => setPwd(e.target.value)}
                
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p id="pwdnote" className={pwdFocus && !validPwd && pwd ? "instructions" : "offscreen"}>
                <InfoIcon />
                8 to 24 characters.
                <br />
                Must include uppercase & lowercase letters, and number
              </p>
            </div>

            <div className="box box-two">
              <label htmlFor="confirm_pwd">
                Confirm Password:
                <i className={validMatch && matchPwd ? "valid" : "hide"}>
                  <CheckIcon />
                </i>
                <i className={validMatch || !matchPwd ? "hide" : "invalid"}>
                  <CloseIcon />
                </i>
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <InfoIcon />
                Must match the first password input field.
              </p>
            </div>

            <button disabled={!validName || !validPwd || !validMatch ? true : false} className="reg-btn">
              Sign Up
            </button>
          </form>

          <p className="to-login">
            Already registered ? <Link to="/login">Log In</Link>
          </p>
        </div>
    
    </>
  );
};

export default Register;
