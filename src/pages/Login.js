import React from "react";
import { useNavigate } from "react-router-dom"; // 
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate(); // 

  return (
    <div
      className="Login"
      style={{
        width: "414px",
        height: "896px",
        margin: "0 auto",
        background: "#FFFFFF",
        position: "relative",
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Título */}
      <div
        style={{
          position: "absolute",
          top: "160px",
          left: "36px",
          right: "36px",
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "700",
          color: "#000"
        }}
      >
        Log In to your account
      </div>

      {/* Email input */}
      <input
        type="email"
        placeholder="Email"
        style={{
          width: "343px",
          height: "56px",
          position: "absolute",
          top: "270px",
          left: "36px",
          padding: "16px",
          border: "1px solid #BDBDBD",
          borderRadius: "12px",
          fontSize: "16px"
        }}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        style={{
          width: "343px",
          height: "56px",
          position: "absolute",
          top: "340px",
          left: "36px",
          padding: "16px",
          border: "1px solid #BDBDBD",
          borderRadius: "12px",
          fontSize: "16px"
        }}
      />

      {/* Button login */}
      <div
        style={{
          position: "absolute",
          top: "440px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
      <Button
        label="Log in"
        variant="filled"
        onClick={() => navigate("/home")}
  />
</div>

      {/* Forgot password */}
      <div
      style={{
        position: "absolute",
        top: "516px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Button
        label="Forgot password"
        variant="text"
      />
    </div>
    </div>
  );
};

export default Login;
