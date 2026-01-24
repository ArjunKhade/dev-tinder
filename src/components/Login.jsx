import axios from "axios";
import React, { useState } from "react";
import { LOGIN_SIGNUP, LOGIN_URL } from "../constant/api.config";
import { useDispatch } from "react-redux";
import { addUser } from "../store/appSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLogin = async () => {
    try {
      const res = await axios.post(LOGIN_URL, { email, password });

      console.log(res.data);
      dispatch(addUser(res.data));
      if (res?.data?.token) {
        localStorage.setItem("authToken", res.data.token);
      }
      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(LOGIN_SIGNUP, { name:firstname, email, password, role:"role_customer", phone:"9545176916" });

      console.log(res.data);
      
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-100 shadow-lg w-96 rounded-lg overflow-hidden">
        <div className="card-body p-6">
          <h2 className="card-title text-center text-2xl font-bold mb-4">
            {isLoginForm ? "Login" : "Signup"}
          </h2>
          {!isLoginForm && (
            <>
              <label>
                <span className="text-sm font-medium">First Name</span>
                <input
                  type="text"
                  placeholder="mail@site.com"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-md border rounded-md p-2 w-full mt-1"
                />
              </label>
              <label>
                <span className="text-sm font-medium">Last Name</span>
                <input
                  type="text"
                  placeholder="mail@site.com"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-md border rounded-md p-2 w-full mt-1"
                />
              </label>
            </>
          )}

          <label>
            <span className="text-sm font-medium">Email</span>
            <input
              type="text"
              placeholder="mail@site.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-md border rounded-md p-2 w-full mt-1"
            />
          </label>
          <label className="mt-4">
            <span className="text-sm font-medium">Password</span>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-md border rounded-md p-2 w-full mt-1"
            />
          </label>
          <button onClick={isLoginForm ? handleLogin : handleSignup} className="btn btn-primary w-full mt-6">
            {isLoginForm ? "Login" : "Signup"}
          </button>
          <p className="mt-3 m-auto" onClick={() => setIsLoginForm((value) => !value)}>
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
