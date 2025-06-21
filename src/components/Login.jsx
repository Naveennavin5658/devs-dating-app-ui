import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("naveennavin5659@gmail.com");
  const [password, setPassword] = useState("Shambho@5659");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!emailId || !password) {
      return setError("Email and password are required.");
    }

    try {
      setLoading(true);
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      const raw = err?.response?.data;
      setError(typeof raw === "string" ? raw : raw?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!firstName || !lastName || !emailId || !password) {
      return setError("All fields are required for sign up.");
    }

    try {
      setLoading(true);
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/profile");
    } catch (err) {
      const raw = err?.response?.data;
      setError(typeof raw === "string" ? raw : raw?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {/* Sign Up Fields */}
          {!isLoginForm && (
            <>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </>
          )}

          {/* Email */}
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Email ID:</span>
            </div>
            <input
              type="email"
              value={emailId}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>

          {/* Password */}
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm">{typeof error === "string" ? error : error?.message}</p>
          )}

          {/* Submit Button */}
          <div className="card-actions justify-center m-2">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
              disabled={loading}
            >
              {loading
                ? isLoginForm
                  ? "Logging in..."
                  : "Signing up..."
                : isLoginForm
                ? "Login"
                : "Sign Up"}
            </button>
          </div>

          {/* Toggle Form Mode */}
          <p
            className="m-auto cursor-pointer py-2 text-sm text-blue-600 hover:underline"
            onClick={() => {
              setError(""); // Clear previous errors when switching mode
              setIsLoginForm((prev) => !prev);
            }}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
