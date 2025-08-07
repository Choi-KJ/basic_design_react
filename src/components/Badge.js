import React from "react";
import theme from "../theme";

const badgeStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    borderRadius: theme.borderRadius.full,
    transition: "all 0.15s ease",
    whiteSpace: "nowrap",
    border: "1px solid transparent"
  },
  variants: {
    default: {
      background: "rgba(255, 255, 255, 0.08)",
      color: theme.colors.primary.text,
      border: "1px solid rgba(255, 255, 255, 0.12)"
    },
    primary: {
      background: theme.colors.primary.accent,
      color: "rgb(255, 255, 255)"
    },
    success: {
      background: "rgba(16, 185, 129, 0.1)",
      color: theme.colors.semantic.success,
      border: `1px solid rgba(16, 185, 129, 0.2)`
    },
    warning: {
      background: "rgba(245, 158, 11, 0.1)",
      color: theme.colors.semantic.warning,
      border: `1px solid rgba(245, 158, 11, 0.2)`
    },
    error: {
      background: "rgba(239, 68, 68, 0.1)",
      color: theme.colors.semantic.error,
      border: `1px solid rgba(239, 68, 68, 0.2)`
    },
    info: {
      background: "rgba(59, 130, 246, 0.1)",
      color: theme.colors.semantic.info,
      border: `1px solid rgba(59, 130, 246, 0.2)`
    },
    outline: {
      background: "transparent",
      color: theme.colors.primary.textSecondary,
      border: `1px solid ${theme.colors.primary.border}`
    }
  },
  sizes: {
    sm: {
      padding: "2px 8px",
      fontSize: "11px",
      height: "20px"
    },
    md: {
      padding: "4px 12px",
      fontSize: theme.typography.fontSize.xs,
      height: "24px"
    },
    lg: {
      padding: "6px 16px",
      fontSize: theme.typography.fontSize.sm,
      height: "28px"
    }
  }
};

const Badge = ({ 
  variant = "default", 
  size = "md", 
  children, 
  style, 
  ...props 
}) => {
  const badgeStyle = {
    ...badgeStyles.base,
    ...badgeStyles.variants[variant],
    ...badgeStyles.sizes[size],
    ...style
  };

  return (
    <span
      style={badgeStyle}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;