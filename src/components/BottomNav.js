import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiCreditCard,
  FiList,
  FiPlusCircle
} from "react-icons/fi";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/home", icon: <FiHome /> },
    { label: "Accounts", path: "/accounts", icon: <FiCreditCard /> },
    { label: "Registers", path: "/registers", icon: <FiList /> },
    { label: "Profile", path: "/profile", icon: <FiUser /> }
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "414px",
        background: "#FFFFFF",
        borderTop: "1px solid #E0E0E0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
        zIndex: 10
      }}
    >
      {/* Primer botón */}
      <button
        onClick={() => navigate("/home")}
        style={buttonStyle(location.pathname === "/home")}
      >
        <FiHome />
        <span style={labelStyle}>Home</span>
      </button>

      {/* Segundo botón */}
      <button
        onClick={() => navigate("/accounts")}
        style={buttonStyle(location.pathname === "/accounts")}
      >
        <FiCreditCard />
        <span style={labelStyle}>Accounts</span>
      </button>

      {/* Espacio central */}
      <div style={{ width: "64px" }} />

      {/* Cuarto botón */}
      <button
        onClick={() => navigate("/registers")}
        style={buttonStyle(location.pathname === "/registers")}
      >
        <FiList />
        <span style={labelStyle}>Records</span>
      </button>

      {/* Quinto botón */}
      <button
        onClick={() => navigate("/profile")}
        style={buttonStyle(location.pathname === "/profile")}
      >
        <FiUser />
        <span style={labelStyle}>Profile</span>
      </button>

      {/* Botón flotante central */}
      <button
        onClick={() => navigate("/New_registration")}
        style={{
          position: "absolute",
          top: "-28px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "64px",
          height: "64px",
          background: "#9DF069",
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          fontSize: "28px",
          color: "#000",
          cursor: "pointer",
          zIndex: 11
        }}
      >
        <FiPlusCircle />
      </button>
    </div>
  );
};

const buttonStyle = (active) => ({
  background: "none",
  border: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: active ? "#2F80ED" : "#828282",
  fontSize: "20px",
  cursor: "pointer"
});

const labelStyle = {
  fontSize: "12px",
  marginTop: "4px"
};

export default BottomNav;
