import React from "react";
import BottomNav from "../components/BottomNav";
import Button from "../components/Button";
import AccountCard from "../components/AccountCard";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import fakeData from "../data/fakeData";

const Accounts = () => {
  // Add amounts per account
  const accountSums = fakeData.reduce((acc, record) => {
    const { account, amount, type } = record;
    const numericAmount = parseFloat(amount);
    if (!acc[account]) acc[account] = 0;
    acc[account] += type === "income" ? numericAmount : -numericAmount;
    return acc;
  }, {});

  const accounts = [
    {
      name: "Galicia Bank",
      variant: "galicia",
      icon: "💰",
    },
    {
      name: "Credit card",
      variant: "credit",
      icon: "💳",
    },
    {
      name: "Mercado Pago",
      variant: "Mercado Pago",
      icon: "💳",
    },
  ];

  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: colors.background,
        padding: "32px 24px 100px",
        fontFamily: fonts.fontFamily,
      }}
    >
      {/* Title */}
      <h2 style={{ ...fonts.heading2, color: colors.textPrimary }}>Accounts</h2>

      {/* Account cards */}
      {accounts.map((acc) => {
        const balance = accountSums[acc.name] || 0;
        const formattedBalance = `$${balance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;

        return (
          <div key={acc.name} style={{ marginBottom: "16px" }}>
            <AccountCard
              name={acc.name}
              balance={formattedBalance}
              variant={acc.variant}
              icon={acc.icon}
              fullWidth
            />
          </div>
        );
      })}

      {/* Button: add new account */}
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button label="Add a new account" variant="outline" />
      </div>

      <BottomNav />
    </div>
  );
};

export default Accounts;
