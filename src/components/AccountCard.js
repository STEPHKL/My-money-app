import React from "react";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const variantStyles = {
  galicia: {
    background: colors.galicia,
    textColor: colors.white,
  },
  credit: {
    background: colors.creditCard,
    textColor: colors.white,
  },
  debit: {
    background: colors.debitCard,
    textColor: colors.white,
  },
};

const AccountCard = ({ name, balance, variant = "galicia" }) => {
  const style = variantStyles[variant] || variantStyles.galicia;

  return (
    <div
      style={{
        width: "160px",
        background: style.background,
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        padding: "16px",
        color: style.textColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <h5 style={{ ...fonts.body, marginBottom: "4px" }}>{name}</h5>
      <p style={{ ...fonts.heading3, margin: 0 }}>{balance}</p>
    </div>
  );
};

export default AccountCard;
