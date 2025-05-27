import React from "react";
import BottomNav from "../components/BottomNav";
import { FiPlus } from "react-icons/fi";
import Button from "../components/Button";

const Accounts = () => {
  const accounts = [
    {
      name: "Galicia Bank",
      amount: "$65.892",
      color: "linear-gradient(90deg, #FDC830 0%, #F37335 100%)",
      icon: "💰"
    },
    {
      name: "Credit card",
      amount: "-$5.673",
      color: "linear-gradient(90deg, #B06AB3 0%, #4568DC 100%)",
      icon: "💳"
    },
    {
      name: "Debit card",
      amount: "$130.543",
      color: "linear-gradient(90deg, #CCCCCC 0%, #E0E0E0 100%)",
      icon: "💳"
    }
  ];

  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: "#FFFFFF",
        padding: "32px 24px 100px",
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Título */}
      <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "24px" }}>
        Accounts
      </h1>

      {/* Tarjetas de cuenta */}
      {accounts.map((acc, index) => (
        <div
          key={index}
          style={{
            background: acc.color,
            borderRadius: "20px",
            padding: "20px",
            color: "#FFF",
            fontWeight: "600",
            fontSize: "18px",
            marginBottom: "16px",
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <div>{acc.name}</div>
            <div style={{ fontSize: "14px", marginTop: "4px", opacity: 0.85 }}>
              {acc.amount}
            </div>
          </div>
          <div style={{ fontSize: "36px", opacity: 0.2 }}>{acc.icon}</div>
        </div>
      ))}

      {/* Button add a new account */}
      <div
        style={{
          position: "absolute",
          top: "416px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
      <Button
        label="Add a new account"
        variant="outline"
  />
</div>

      <BottomNav />
    </div>
  );
};

export default Accounts;
