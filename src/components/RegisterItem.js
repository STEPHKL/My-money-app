const RegisterItem = ({ rec }) => {
  const amount = parseFloat(rec.amount);
  const formatted = !isNaN(amount) ? amount.toFixed(2) : "0.00";

  return (
    <li
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
      <span style={{ color: rec.type === "income" ? "#219653" : "#EB5757" }}>
        {rec.type === "income" ? "+" : "-"} ${formatted}
      </span>
    </li>
  );
};
