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
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[error,setError]=useState("");
  const[isLoginForm,setIsLoginForm]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_UrL+"login", {
        email,
        password,
      },{withCredentials:true});
       
      dispatch(addUser(res.data));  
      return navigate("/");  
    } catch (err) {
      setError(err?.response?.data||"Something went wrong")
    }
  };

  const handleSignUp=async()=>{
    try{
      const res=await axios.post(BASE_UrL+"signup",{firstName,lastName,email,password},{withCredentials:true});
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    }catch(err){
      setError(err?.response?.data||"Something went wrong")     
    }
  }

  return (
    <div className="flex justify-center pb-20">
      <div className="card card-border bg-base-300 w-96 my-10">
        <div className="card-body ">
          <h2 className="card-title justify-center">{isLoginForm?"Login":"Sign Up"}</h2>
          <div>
            <fieldset className="fieldset">
              {!isLoginForm &&<>
                <legend className="fieldset-legend">First Name</legend>
              <input
                type="text"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
               <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              </>}
             
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary" onClick={isLoginForm?handleLogin:handleSignUp}>
              {isLoginForm?"Login":"Sign Up"}
            </button>
          </div>
          <p className="text-center cursor-pointer text-lg text-blue-400" onClick={()=>setIsLoginForm((value)=>!value)}>
              {
                isLoginForm?"New User? Signup here":"Existing User? Login here"
              }
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
