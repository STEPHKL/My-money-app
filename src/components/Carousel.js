import AccountCard from "../components/AccountCard.js";

const Carousel = () => {
  return (
    <div style={{ overflowX: "auto", paddingBottom: "12px" }}>
      <div
        style={{
          display: "flex",
          gap: "12px",
          paddingBottom: "8px",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          width: "max-content",
        }}
        className="hide-scrollbar"
      >
        <AccountCard name="Galicia Bank" balance="$65.892" variant="galicia" />
        <AccountCard name="Credit Card" balance="-$5.673" variant="credit" />
        <AccountCard name="Mercado Pago" balance="$130.543" variant="debit" />

      </div>
    </div>
  );
};
export default Carousel;
