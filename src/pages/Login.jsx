import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userAuth/userAuth.actions";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginAs, setLoginAs] = useState(null);

  const submitHandler = e => {
    e.preventDefault();
    if (!loginAs) {
      alert("Please select type of user!");
      return;
    }

    dispatch(userLogin({ userType: loginAs, personId: 3 }));
    navigate(from, { replace: true });
  };
  return (
    <div className="form-container" style={{ margin: "30px auto", width: "75%" }}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">First Name</label>
        <input type="text" id="username" name="username" placeholder="Your name.." />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" placeholder="Your password.." />

        <label htmlFor="login-as" className="mr-2">
          User
        </label>
        <input
          type="radio"
          id="login-as"
          name="login-as"
          placeholder="Your login As.."
          className="mr-5"
          value={"user"}
          onChange={e => setLoginAs(e.target.value)}
        />
        <label htmlFor="login-as " className="mr-2">
          Person
        </label>
        <input
          type="radio"
          id="login-as"
          name="login-as"
          placeholder="Your login As.."
          value={"person"}
          onChange={e => setLoginAs(e.target.value)}
        />

        <input type="submit" value="Submit" className="bg-blue-500" />
      </form>
    </div>
  );
};

export default Login;
