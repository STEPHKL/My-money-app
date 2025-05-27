import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import fakeRecords from "../data/fakeData"; // ✅ Ajustá la ruta según tu proyecto

const Registers = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    localStorage.removeItem("records");

    localStorage.setItem("records", JSON.stringify(fakeRecords));

    setRecords([...fakeRecords].reverse());
  }, []);

  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: "#F9F9F9",
        padding: "24px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px" }}>
        Registers
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {records.length === 0 && (
          <li
            style={{
              color: "#999",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            No records yet.
          </li>
        )}

        {records.map((rec) => {
          const amount = parseFloat(rec.amount);
          const formattedAmount = !isNaN(amount) ? amount.toFixed(2) : "0.00";

          return (
            <li
              key={rec.id}
              style={{
                background: "#FFF",
                borderRadius: "12px",
                padding: "12px 16px",
                marginBottom: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{rec.notes || rec.type}</span>
              <span
                style={{
                  color: rec.type === "income" ? "#219653" : "#EB5757",
                }}
              >
                {rec.type === "income" ? "+" : "-"} ${formattedAmount}
              </span>
            </li>
          );
        })}
      </ul>

      <BottomNav />
    </div>
  );
};

export default Registers;
