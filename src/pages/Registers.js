import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import fakeRecords from "../data/fakeData";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Registers = () => {
  const [records, setRecords] = useState([]);

    useEffect(() => {
    localStorage.setItem("records", JSON.stringify(fakeRecords));
    setRecords([...fakeRecords].reverse()); // Mostrar los más recientes arriba
  }, []);

  // Group by date
  const groupedByDate = records.reduce((acc, rec) => {
    const dateKey = rec.date;
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(rec);
    return acc;
  }, {});

  // Format date 
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div
      style={{
        width: "414px",
        minHeight: "896px",
        margin: "0 auto",
        background: colors.background,
        padding: "32px 24px",
        fontFamily: fonts.fontFamily,
      }}
    >
      <h2 style={{ ...fonts.heading2, color: colors.textPrimary }}>
        Last records
      </h2>

      {records.length === 0 ? (
        <div style={{ color: "#999", textAlign: "center", marginTop: "12px" }}>
          No records yet.
        </div>
      ) : (
        Object.keys(groupedByDate)
          .sort((a, b) => new Date(b) - new Date(a)) // sort by most recent date
          .map((dateKey) => (
            <div key={dateKey} style={{ marginBottom: "24px" }}>
              {/* Date header */}
              <div
                style={{
                  ...fonts.heading3,
                  color: colors.textSecondary,
                  marginBottom: "8px",
                }}
              >
                {formatDate(dateKey)}
              </div>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {groupedByDate[dateKey].map((rec) => {
                  const amount = parseFloat(rec.amount);
                  const formattedAmount = !isNaN(amount)
                    ? amount.toFixed(2)
                    : "0.00";

                  return (
                    <li
                      key={rec.id}
                      style={{
                        background: colors.white,
                        borderRadius: "12px",
                        padding: "12px 16px",
                        marginBottom: "10px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                        display: "flex",
                        justifyContent: "space-between",
                        ...fonts.body,
                        color: colors.textPrimary,
                      }}
                    >
                      <span>{rec.notes || rec.type}</span>
                      <span
                        style={{
                          color:
                            rec.type === "income"
                              ? colors.income
                              : colors.expense,
                        }}
                      >
                        {rec.type === "income" ? "+" : "-"} ${formattedAmount}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
      )}

      <BottomNav />
    </div>
  );
};

export default Registers;
