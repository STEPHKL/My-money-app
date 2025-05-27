import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import Button from "../components/Button";
import AccountCard from "../components/AccountCard";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import fakeData from "../data/fakeData";
import ExpensesPieChart from "../components/ExpensesPieChart";

const Home = () => {
  const navigate = useNavigate();
  const [recentRecords, setRecentRecords] = useState([]);

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(fakeData));
    setRecentRecords([...fakeData].reverse().slice(0, 3));
  }, []);

  // 🔢 Calcular balances por cuenta
  const accountSums = fakeData.reduce((acc, record) => {
    const { account, amount, type } = record;
    const numericAmount = parseFloat(amount);
    if (!acc[account]) acc[account] = 0;
    acc[account] += type === "income" ? numericAmount : -numericAmount;
    return acc;
  }, {});

  // 💰 Calcular balance total
  const totalBalance = Object.values(accountSums).reduce((sum, val) => sum + val, 0);

  const formattedTotal = `$${totalBalance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  const accounts = [
    { name: "Galicia Bank", variant: "galicia" },
    { name: "Credit card", variant: "credit" },
    { name: "Mercado Pago", variant: "Mercado Pago" },
  ];

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

      {/* Total balance */}
      <div
        style={{
          background: colors.primary,
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          marginBottom: "24px",
        }}
      >
        <div style={{ ...fonts.heading3, color: colors.textPrimary }}>
          Total balance
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginTop: "8px",
            color: colors.textPrimary,
          }}
        >
          {formattedTotal}
        </div>
      </div>

      {/* My accounts */}
      <div>
        <h3
          style={{
            ...fonts.heading3,
            color: colors.textPrimary,
            marginBottom: "12px",
          }}
        >
          My accounts
        </h3>
        <div style={{ display: "flex", gap: "12px", overflowX: "auto" }}>
          {accounts.map((acc) => {
            const balance = accountSums[acc.name] || 0;
            const formatted = `$${balance.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;

            return (
              <div style={{ minWidth: "160px", flex: "0 0 auto" }} key={acc.name}>
                <AccountCard
                  name={acc.name}
                  balance={formatted}
                  variant={acc.variant}
                  width="100%" // 100% del contenedor de 160px
                />
              </div>
            );
          })}
        </div>
      </div>

        {/* Expenses chart */}
        <div style={{ marginTop: "32px" }}>
          <h3 style={{ ...fonts.heading3, color: colors.textPrimary, marginBottom: "12px" }}>
            My expenses
          </h3>
          <ExpensesPieChart />
        </div>

      <BottomNav />
    </div>
  );
};

export default Home;
