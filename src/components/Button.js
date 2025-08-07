import React from "react";
import theme from "../theme";

const buttonStyles = {
  primary: {
    background: theme.components.button.primary.background,
    color: theme.components.button.primary.color,
    padding: theme.components.button.primary.padding,
    height: theme.components.button.primary.height,
    borderRadius: theme.components.button.primary.borderRadius,
    fontSize: theme.components.button.primary.fontSize,
    fontWeight: theme.components.button.primary.fontWeight,
    border: theme.components.button.primary.border,
    boxShadow: theme.components.button.primary.boxShadow,
    transition: theme.components.button.primary.transition,
    cursor: "pointer"
  },
  secondary: {
    background: theme.components.button.secondary.background,
    color: theme.components.button.secondary.color,
    padding: theme.components.button.secondary.padding,
    height: theme.components.button.secondary.height,
    borderRadius: theme.components.button.secondary.borderRadius,
    fontSize: theme.components.button.secondary.fontSize,
    fontWeight: theme.components.button.secondary.fontWeight,
    border: theme.components.button.secondary.border,
    transition: theme.components.button.secondary.transition,
    cursor: "pointer"
  },
  ghost: {
    background: theme.components.button.ghost.background,
    color: theme.components.button.ghost.color,
    padding: theme.components.button.ghost.padding,
    borderRadius: theme.components.button.ghost.borderRadius,
    border: theme.components.button.ghost.border,
    transition: theme.components.button.ghost.transition,
    cursor: "pointer"
  }
};

const Button = ({ variant = "primary", children, style, ...props }) => {
  return (
    <button
      style={{ ...buttonStyles[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;