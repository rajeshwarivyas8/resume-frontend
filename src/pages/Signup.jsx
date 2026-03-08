import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // LOGIN API
        const res = await axios.post(
          "https://resume-backend-cduz.onrender.com/api/auth/login",
          {
            email,
            password,
          }
        );

        localStorage.setItem("token", res.data.token);
        alert("Login Successful ✅");
        navigate("/dashboard");
      } else {
        // SIGNUP API
        await axios.post(
          "https://resume-backend-cduz.onrender.com/api/auth/signup",
          {
            name,
            email,
            password,
          }
        );

        alert("Signup Successful ✅ Please Login");
        setIsLogin(true); // switch to login
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <p className="auth-subtitle">
          {isLogin
            ? "Login to continue"
            : "Sign up to build your professional resume"}
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="auth-input"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p
          style={{ marginTop: "15px", cursor: "pointer", color: "green" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default Signup;





