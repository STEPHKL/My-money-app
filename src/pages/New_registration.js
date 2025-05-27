import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const New_registration = () => {
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

    navigate("/Home");
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
        background: "#FFFFFF",
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "24px" }}>
        New registration
      </h1>

      {/* Tipo de operación */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "24px" }}>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            style={{
              border: "none",
              background: "none",
              fontWeight: type === t ? "700" : "400",
              color: type === t ? "#27AE60" : "#000",
              borderBottom: type === t ? "2px solid #27AE60" : "2px solid transparent",
              paddingBottom: "4px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Monto */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ fontSize: "14px", color: "#828282" }}>Amount</label>
        <div style={{ fontSize: "28px", fontWeight: "700", marginTop: "4px" }}>
          $ <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            style={{
              border: "none",
              outline: "none",
              fontSize: "28px",
              fontWeight: "700"
            }}
          />
        </div>
      </div>

      {/* Cuentas */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ fontSize: "14px", color: "#828282", display: "block", marginBottom: "8px" }}>
          Select the account
        </label>
        <div style={{ display: "flex", gap: "12px" }}>
          {accounts.map((acc) => (
            <button
              key={acc}
              onClick={() => setAccount(acc)}
              style={{
                background:
                  acc === "Galicia Bank"
                    ? "linear-gradient(90deg, #FDC830 0%, #F37335 100%)"
                    : acc === "Credit card"
                    ? "linear-gradient(90deg, #B06AB3 0%, #4568DC 100%)"
                    : "linear-gradient(90deg, #CCCCCC 0%, #E0E0E0 100%)",
                border: account === acc ? "3px solid #27AE60" : "none",
                borderRadius: "16px",
                color: "#fff",
                fontWeight: "600",
                padding: "16px 20px",
                flex: 1,
                cursor: "pointer"
              }}
            >
              {acc}
            </button>
          ))}
        </div>
      </div>

      {/* Categorías */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ fontSize: "14px", color: "#828282", display: "block", marginBottom: "8px" }}>
          Select the category
        </label>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                border: category === cat ? "2px solid #27AE60" : "1.5px solid #E0E0E0",
                borderRadius: "16px",
                padding: "12px 16px",
                fontWeight: "500",
                background: "none",
                color: "#000",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fecha */}
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
            fontSize: "16px"
          }}
        />
      </div>

      {/* Descripción */}
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
            fontSize: "16px"
          }}
        />
      </div>

      {/* Button save */}
      <div
        style={{
          position: "absolute",
          top: "640px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
      <Button
        label="Save"
        variant="filled"
        onClick={() => navigate("/home")}
  />
</div>
    </div>
  );
};

export default New_registration;
