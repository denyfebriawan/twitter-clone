import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const EMAIL_REGEX = /[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //     userRef.current.focus();
  // }, [])





  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      setErrMsg("");
      setLoading(true);

      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
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
      // setSuccess(true);
      // setUser('');
      // setPwd('');
      // setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("There is no such email!");
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
        <h1>Welcome to twitter</h1>
        <form onSubmit={handleSubmit}>
          <div className="box box-two">
            <label htmlFor="username">
              Email:
            </label>
            <input
              type="text"
              id="username"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              // value={user}
              required
            />
           
          </div>

          <div className="box box-two">
            <label htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              onChange={(e) => setPwd(e.target.value)}
              // value={pwd}
              required
            />
          </div>

          <button disabled={!user || !pwd ? true : false} className="reg-btn">
            Log In
          </button>
        </form>

        <p className="to-login">
          Need an account ? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
