import React from "react";
import { useTheme } from "../ThemeProvider";

const Input = ({ 
  variant = "default", 
  size = "md", 
  placeholder, 
  value, 
  onChange, 
  type = "text",
  disabled = false,
  error = false,
  icon,
  style,
  ...props 
}) => {
  const theme = useTheme();

  const getInputStyles = () => {
    const baseStyles = {
      fontFamily: theme.typography.fontFamily.primary,
      fontSize: size === "sm" ? theme.typography.fontSize.sm : theme.typography.fontSize.base,
      fontWeight: theme.typography.fontWeight.normal,
      lineHeight: theme.typography.lineHeight.normal,
      padding: size === "sm" ? "8px 12px" : "12px 16px",
      borderRadius: theme.borderRadius.md,
      border: `1px solid ${error ? theme.colors.semantic.error : theme.colors.primary.border}`,
      background: theme.colors.primary.surface,
      color: theme.colors.primary.text,
      outline: "none",
      transition: "all 0.15s ease",
      width: "100%",
      boxSizing: "border-box",
      ...style
    };

    if (variant === "ghost") {
      baseStyles.background = "transparent";
      baseStyles.border = "1px solid transparent";
      baseStyles.borderBottom = `1px solid ${error ? theme.colors.semantic.error : theme.colors.primary.border}`;
      baseStyles.borderRadius = "0";
      baseStyles.padding = size === "sm" ? "6px 0" : "10px 0";
    }

    if (disabled) {
      baseStyles.opacity = 0.5;
      baseStyles.cursor = "not-allowed";
    }

    return baseStyles;
  };

  const getFocusStyles = () => ({
    borderColor: error ? theme.colors.semantic.error : theme.colors.primary.accent,
    boxShadow: `0 0 0 2px ${error ? `${theme.colors.semantic.error}20` : `${theme.colors.primary.accent}20`}`
  });

  const containerStyles = {
    position: "relative",
    display: "inline-block",
    width: "100%"
  };

  const iconStyles = {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: theme.colors.primary.textMuted,
    pointerEvents: "none"
  };

  return (
    <div style={containerStyles}>
      {icon && <div style={iconStyles}>{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          ...getInputStyles(),
          paddingLeft: icon ? "40px" : getInputStyles().padding.split(" ")[1]
        }}
        onFocus={(e) => {
          Object.assign(e.target.style, getFocusStyles());
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? theme.colors.semantic.error : theme.colors.primary.border;
          e.target.style.boxShadow = "none";
        }}
        {...props}
      />
    </div>
  );
};

export default Input;