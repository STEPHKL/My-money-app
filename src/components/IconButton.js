import React from "react";
import PropTypes from "prop-types";

const IconButton = ({
  icon: Icon,
  onClick,
  size = 20,
  color = "#4F4F4F",
  ariaLabel = "icon button",
  title = "",
  style = {},
}) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    title={title}
    style={{
      background: "none",
      border: "none",
      padding: "4px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    <Icon size={size} color={color} />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

export default IconButton;
