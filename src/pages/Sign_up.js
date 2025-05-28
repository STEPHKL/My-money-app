import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import image2 from "../assets/Image_2.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: colors.background,
        padding: "32px 24px",
        fontFamily: fonts.fontFamily,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <img
        src={image2}
        alt="Intro"
        style={{
          width: "80%",
          maxWidth: "340px",
          height: "auto",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      />

      {/* Title */}
      <h1 style={{ ...fonts.heading1, color: colors.textPrimary, textAlign: "center", marginBottom: "16px" }}>
        Stay on top of your finance with us.
      </h1>

      {/* Subtitle */}
      <p
        style={{
          ...fonts.body,
          color: colors.textSecondary,
          textAlign: "center",
          lineHeight: "22px",
          marginBottom: "48px",
        }}
      >
        We are your new financial advisors to recommend the best investments for you.
      </p>

      {/* Get Started Button */}
      <Button
        label="Get Started"
        variant="filled"
        onClick={() => navigate("/create_account")}
        style={{ width: "100%", maxWidth: "320px", marginBottom: "16px" }}
      />

      {/* Log In Button */}
      <Button
        label="Log in"
        variant="text"
        onClick={() => navigate("/login")}
        style={{ width: "100%", maxWidth: "320px" }}
      />
    </div>
  );
};

export default SignUp;
