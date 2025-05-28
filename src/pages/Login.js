import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: colors.background,
        padding: "48px 24px",
        fontFamily: fonts.fontFamily,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          ...fonts.heading1,
          color: colors.textPrimary,
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Log in to your account
      </h1>

      {/* Email input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "343px",
          height: "56px",
          padding: "16px",
          marginBottom: "16px",
          border: "1px solid #BDBDBD",
          borderRadius: "12px",
          fontSize: "16px",
          ...fonts.body,
        }}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "343px",
          height: "56px",
          padding: "16px",
          marginBottom: "32px",
          border: "1px solid #BDBDBD",
          borderRadius: "12px",
          fontSize: "16px",
          ...fonts.body,
        }}
      />

      {/* Login button */}
      <Button
        label="Log in"
        variant="filled"
        onClick={() => navigate("/home")}
        style={{ width: "100%", maxWidth: "343px", marginBottom: "16px" }}
      />

      {/* Forgot password */}
      <Button
        label="Forgot password"
        variant="text"
        onClick={() => alert("Functionality not implemented")}
        style={{ maxWidth: "343px" }}
      />
    </div>
  );
};

export default Login;
