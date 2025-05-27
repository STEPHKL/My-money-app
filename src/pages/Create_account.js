import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


const Create_account = () => {
  const navigate = useNavigate();

  return (
    <div
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
          top: "120px",
          left: "36px",
          right: "36px",
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "700",
          color: "#000"
        }}
      >
        Create your account
      </div>

      {/* Input: Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        style={{
          width: "343px",
          height: "56px",
          position: "absolute",
          top: "220px",
          left: "36px",
          padding: "16px",
          border: "1px solid #BDBDBD",
          borderRadius: "12px",
          fontSize: "16px"
        }}
      />

      {/* Input: Email */}
      <input
        type="email"
        placeholder="Email"
        style={{
          width: "343px",
          height: "56px",
          position: "absolute",
          top: "290px",
          left: "36px",
          padding: "16px",
          border: "1px solid #BDBDBD",
          borderRadius: "12px",
          fontSize: "16px"
        }}
      />

      {/* Input: Password */}
      <input
        type="password"
        placeholder="Password"
        style={{
          width: "343px",
          height: "56px",
          position: "absolute",
          top: "360px",
          left: "36px",
          padding: "16px",
          border: "1px solid #BDBDBD",
          borderRadius: "12px",
          fontSize: "16px"
        }}
      />

      {/* Button Create Account */}
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
        label="Create account"
        variant="filled"
        onClick={() => navigate("/home")}
  />
</div>

      {/* Enlace a Login */}
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
        label="Already have an account? Log in"
        variant="text"
        onClick={() => navigate("/login")}
      />
    </div>
    </div>
  );
};

export default Create_account;
