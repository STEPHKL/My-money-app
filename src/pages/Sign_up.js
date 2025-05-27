import React from "react";
import { Form, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import image2 from "../assets/Image_2.png"

const SignUp = () => {
  const navigate = useNavigate();


  return (
    <div
      className="SignUp"
      style={{
        width: "414px",
        height: "917px",
        position: "relative",
        background: "var(--surface-surface-base-default, white)",
        overflow: "hidden",
        margin: "0 auto",
        fontFamily: "'DM Sans', sans-serif"
      }}
    >
      <img src={image2} 
      alt="image2" 
      style={{ 
        display: "block",
        margin: "100px auto 0",
        width: "80%", 
        height: "auto" }} />

      {/* Title */}
      <div
        className="PageTitle"
        style={{
          width: "354px",
          left: "41px",
          top: "466px",
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: "34px",
          fontWeight: "700",
          wordWrap: "break-word"
        }}
      >
        Stay on top of your finance with us.
      </div>

      {/* SubTitle */}
      <div
        className="SubTitle"
        style={{
          width: "354px",
          left: "41px",
          top: "565px",
          position: "absolute",
          textAlign: "center",
          color: "#4F4F4F",
          fontSize: "17px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "400",
          lineHeight: "22px",
          wordWrap: "break-word"
        }}
      >
        We are your new financial advisors<br />
        to recommend the best investments for you.
      </div>

   {/* Button Get Started */}
    <div
      style={{
        position: "absolute",
        top: "680px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Button
        label="Get Started"
        variant="filled"
        onClick={() => navigate("/create_account")}
      />
    </div>

{/* Button to Login */}
<div
  style={{
    position: "absolute",
    top: "756px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }}
>
  <Button
    label="Log in"
    variant="text"
    onClick={() => navigate("/login")}
  />
</div>
    </div>
  );
};

export default SignUp;
