import React from "react";

const baseColor = "#9DF069";
const textColor = "#1A1A1A";

const Button = ({ label = "Button", variant = "filled", onClick }) => {
  const baseStyle = {
    padding: "16px 24px",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    maxWidth: "354px",
    textAlign: "center",
    transition: "all 0.2s ease-in-out",
  };

  let style = { ...baseStyle };

  switch (variant) {
    case "filled":
      style.background = baseColor;
      style.color = textColor;
      style.border = "none";
      break;
    case "outline":
      style.background = "transparent";
      style.color = textColor;
      style.border = `2px solid ${baseColor}`;
      break;
    case "text":
      style.background = "transparent";
      style.color = textColor;
      style.border = "none";
      break;
    default:
      break;
  }

  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
