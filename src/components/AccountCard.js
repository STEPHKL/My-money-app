import colors from "../styles/colors";
import fonts from "../styles/fonts";

const variantStyles = {
  galicia: { background: colors.galicia, textColor: colors.white, borderColor: "#e68a00" },
  credit: { background: colors.creditCard, textColor: colors.white, borderColor: "#a04de5" },
  "Mercado Pago": { background: colors.mercadopagoCard, textColor: colors.white, borderColor: "#2d76e8" },
};

const AccountCard = ({
  name,
  balance,
  variant = "galicia",
  icon,
  hideBalance = false,
  onClick,
  isSelected = false,
  width,
  fullWidth=false,
}) => {
  const style = variantStyles[variant] || variantStyles.galicia;

  return (
    <div
      onClick={onClick}
      style={{
        width: fullWidth ? "100%" : width || "160px",
        background: style.background,
        borderRadius: "20px",
        border: isSelected ? `3px solid ${style.borderColor}` : "none",
        padding: "16px",
        color: style.textColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        overflow: "visible",
      }}
    >
      {/* Icon (opcional) */}
      {icon && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            fontSize: "28px",
            opacity: 0.15,
          }}
        >
          {icon}
        </div>
      )}

      {/* Name */}
      <h5
        style={{
          ...fonts.body,
          marginBottom: hideBalance ? 0 : "4px",
          zIndex: 1,
        }}
      >
        {name}
      </h5>

      {/* Balance */}
      {!hideBalance && (
        <p style={{ ...fonts.heading3, margin: 0, zIndex: 1 }}>{balance}</p>
      )}
    </div>
  );
};

export default AccountCard;
