import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import AccountCard from "../components/AccountCard";

const NewRegistration = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      account,
      category,
      date,
      description
    };

    const existing = JSON.parse(localStorage.getItem("records")) || [];
    existing.push(newRecord);
    localStorage.setItem("records", JSON.stringify(existing));

    navigate("/home");
  };

  const types = ["Expense", "Transfer", "Income"];
  const accounts = ["Galicia Bank", "Credit card", "Debit card"];
  const categories = ["Food", "Investment", "Shopping"];

  return (
    <div
      style={{
        width: "414px",
        margin: "0 auto",
        padding: "32px 24px 100px",
        background: colors.white,
        fontFamily: fonts.fontFamily
      }}
    >
      {/* Close button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "8px" }}>
        <IconButton
          icon={FiX}
          onClick={() => navigate("/home")}
          title="Cancel"
          ariaLabel="Cancel registration"
          color={colors.textSecondary}
          size={24}
        />
      </div>

      <h1 style={{ ...fonts.heading2, color: colors.textPrimary, marginBottom: "24px" }}>
        New registration
      </h1>

      {/* Operation type */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "24px" }}>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            style={{
              border: "none",
              background: "none",
              fontWeight: type === t ? "700" : "400",
              color: type === t ? colors.income : colors.textPrimary,
              borderBottom: type === t ? `2px solid ${colors.income}` : "2px solid transparent",
              paddingBottom: "4px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Amount */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ ...fonts.small, color: colors.textSecondary }}>
          Amount
        </label>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "4px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: colors.textPrimary,
            }}
          >
            $
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            style={{
              border: "none",
              outline: "none",
              fontSize: "28px",
              fontWeight: "700",
              color: colors.textPrimary,
              background: "none",
              width: "100%",
            }}
          />
        </div>
      </div>

      {/* Accounts */}
      <div style={{ marginBottom: "24px" }}>
        <label
          style={{
            ...fonts.small,
            color: colors.textSecondary,
            display: "block",
            marginBottom: "8px",
          }}
        >
          Select the account
        </label>

        <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "8px" }}>
          {accounts.map((acc) => {
            let variant = "Mercado Pago";
            if (acc === "Galicia Bank") variant = "galicia";
            if (acc === "Credit card") variant = "credit";

            return (
              <AccountCard
                key={acc}
                name={acc}
                variant={variant}
                hideBalance={true}
                isSelected={account === acc}
                onClick={() => setAccount(acc)}
              />
            );
          })}
        </div>
      </div>

      {/* Category */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ ...fonts.small, color: colors.textSecondary, display: "block", marginBottom: "8px" }}>
          Select the category
        </label>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                border: category === cat ? `2px solid ${colors.income}` : "1.5px solid #E0E0E0",
                borderRadius: "16px",
                padding: "12px 16px",
                fontWeight: "500",
                background: "none",
                color: colors.textPrimary,
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Date */}
      <div style={{ marginBottom: "16px" }}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="DD/MM/YYYY"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #E0E0E0",
            borderRadius: "12px",
            fontSize: "16px",
            fontFamily: fonts.fontFamily
          }}
        />
      </div>

      {/* Description */}
      <div style={{ marginBottom: "24px" }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #E0E0E0",
            borderRadius: "12px",
            fontSize: "16px",
            fontFamily: fonts.fontFamily
          }}
        />
      </div>

      {/* Save Button */}
      <Button
        label="Save"
        variant="filled"
        onClick={handleSubmit}
        style={{ width: "100%", maxWidth: "320px" }}
      />
    </div>
  );
};

export default NewRegistration;
