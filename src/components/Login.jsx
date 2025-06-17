import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("naveennavin5659@gmail.com");
  const [password, setPassword] = useState("Shambho@5659");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginClick = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: emailId,
          password: password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      return navigate("/");
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
