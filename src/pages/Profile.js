import React from "react";
import BottomNav from "../components/BottomNav";
import fonts from "../styles/fonts"
import colors from "../styles/colors";

const Profile = () => {
  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: colors.background,
        fontFamily: "'Inter', sans-serif",
        padding: "32px 24px 100px"
      }}
    >
      {/* Title */}
      <h2 style={{ ...fonts.heading2, color: colors.textPrimary }}>
        Profile
      </h2>

      {/* Avatar + Name */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <img
          src="https://i.pravatar.cc/160?img=1"
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "16px"
          }}
        />
        <div style={{ fontSize: "18px", fontWeight: "600" }}>Jonas Macroni</div>
      </div>

      {/* Info Section */}
      {renderField("Birthdate", "05 November 1993", true)}
      {renderField("Gender", "Male", true)}
      {renderField("Email", "jonas.macroni@invest.ai", true)}
      {renderField("Phone Number", "–")}
      {renderField("Address", "–")}

      <BottomNav />
    </div>
  );
};

const renderField = (label, value, changeable = false) => (
  <div style={{ marginBottom: "24px" }}>
    <div
      style={{
        fontSize: "14px",
        color: "#828282",
        marginBottom: "4px"
      }}
    >
      {label}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #E0E0E0",
        paddingBottom: "8px",
        fontSize: "16px",
        fontWeight: "400"
      }}
    >
      <span>{value}</span>
      {changeable && (
        <span
          style={{
            fontSize: "14px",
            color: "#27AE60",
            cursor: "pointer"
          }}
        >
          Change
        </span>
      )}
    </div>
  </div>
);

export default Profile;
