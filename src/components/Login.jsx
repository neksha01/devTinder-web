import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_UrL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_UrL+"login", {
        email,
        password,
      },{withCredentials:true});
         console.log(res.data);
      dispatch(addUser(res.data));  
      return navigate("/");  
    } catch (err) {
      setError(err?.response?.data||"Something went wrong")
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card card-border bg-base-300 w-96 my-10">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
