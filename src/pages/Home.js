import React from "react";
import BottomNav from "../components/BottomNav";
import Carousel from "../components/Carousel";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Home = () => {
  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: colors.background,
        padding: "24px",
        paddingTop: "80px",
        paddingBottom: "80px",
        fontFamily: fonts.fontFamily,
      }}
    >
      {/* Welcome */}
      <h2 style={{ ...fonts.heading2, color: colors.textPrimary }}>
        Welcome back, Jonas 👋
      </h2>

      {/* Balance principal */}
      <div
        style={{
          background: colors.primary,
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          marginBottom: "24px",
        }}
      >
        <div style={{ ...fonts.heading3, color: colors.textSecondary }}>Total balance</div>
        <div style={{ fontSize: "32px", fontWeight: "700", marginTop: "8px", color: colors.textPrimary }}>
          $12,500.00
        </div>
      </div>

      {/* My accounts */}
      <div>
        <h3 style={{ ...fonts.heading3, color: colors.textPrimary, marginBottom: "12px" }}>
          My accounts
        </h3>
        <Carousel />
      </div>

      {/* Recent transactions */}
      <div>
        <h3 style={{ ...fonts.heading3, color: colors.textPrimary, marginBottom: "12px" }}>
          Recent transactions
        </h3>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{
              background: colors.white,
              borderRadius: "12px",
              padding: "12px 16px",
              marginBottom: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              display: "flex",
              justifyContent: "space-between",
              ...fonts.body,
              color: colors.textPrimary,
            }}
          >
            <span>Groceries</span>
            <span>– $120.00</span>
          </li>
          <li
            style={{
              background: colors.white,
              borderRadius: "12px",
              padding: "12px 16px",
              marginBottom: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              display: "flex",
              justifyContent: "space-between",
              ...fonts.body,
              color: colors.textPrimary,
            }}
          >
            <span>Salary</span>
            <span style={{ color: colors.income }}>+ $2,500.00</span>
          </li>
        </ul>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
