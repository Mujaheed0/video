import { useState } from "react";
import { Button, Input } from "../../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../../store";
import { useLocalStorage } from "../../../hooks";
export default function () {
  
  const [userToken, setUserToken] = useLocalStorage("video-lib-user-token");
  const [userData, setUserData] = useLocalStorage("video-lib-user");
  const navigate=useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
const dispatch=useDispatch()
  const location = useLocation();
  const path = location.state?.from?.pathname || "/";

  const toggleShowPassword = () => setShowPassword((s) => !s);

  const handleChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleLogin(loginForm)).unwrap().then(i=>{
        setUserData(i.user);
        setUserToken(i.encodedToken)
      })
        
      navigate(path,{replace:true})
    setLoginForm({
      email: "",
      password: "",
    });
  };

  const guestLogin = (event) => {
    event.preventDefault();
  dispatch(  handleLogin(
      {
        email: "tahirahmed@gmail.com",
        password: "aegistube",
      }
    )).unwrap().then(i=>{
      setUserData(i.user);
      setUserToken(i.encodedToken)
      
    navigate(path,{replace:true})
    })
      
    setLoginForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="content-container">
      <div className={styles.form__container}>
        <h3 className={styles.form__heading}>Login</h3>
        <form onSubmit={handleSubmit}>
          <Input
            label={"email"}
            id={"email"}
            type={"email"}
            name={"email"}
            value={loginForm.email}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <Input
            label={"password"}
            id={"password"}
            type={"password"}
            name={"password"}
            value={loginForm.password}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            required={true}
            onChangeHandler={(event) => handleChange(event)}
          />
          <div className="m-y-2">
            <Button variant="primary" fullWidth>
              Login
            </Button>
          </div>
          <div className="m-y-2">
            <Button variant="secondary" onClick={guestLogin} fullWidth>
              Login as Guest
            </Button>
          </div>
        </form>
        Don't have an account ?{" "}
        <Link className="primary-link" to="/auth/signup">
          Create one now
        </Link>
      </div>
    </div>
  );
}
