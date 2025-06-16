import React from "react";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginClick = async () => {
    try {
      const res = axios.post(
        "http://localhost:3000/login",
        {
          emailId: emailId,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(res);
    } catch (err) {
      console.error(`Login API call failed due to error ${err}`);
    }
  };
  return (
    <div>
      <div className="flex justify-center my-10">
        <div className="card card-dash bg-base-300 w-96 ">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email ID: {emailId}</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="Type here"
                  value={emailId}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                />
              </fieldset>
            </div>

            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">
                  Password: {password}
                </legend>
                <input
                  type="text"
                  className="input"
                  placeholder="Type here"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </fieldset>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleLoginClick}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
