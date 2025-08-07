import React from "react";
import theme from "../theme";

const navStyle = {
  display: theme.components.navigation.display,
  alignItems: theme.components.navigation.alignItems,
  justifyContent: theme.components.navigation.justifyContent,
  padding: theme.components.navigation.padding,
  gap: theme.components.navigation.gap
};

const Navigation = ({ style, ...props }) => (
  <nav style={{ ...navStyle, ...style }} {...props}>
    <ul style={{ display: "flex", gap: theme.spacing.lg, listStyle: "none", margin: 0, padding: 0 }}>
      {theme.content.navigation.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            style={{
              color: theme.colors.primary.textSecondary,
              textDecoration: "none",
              fontSize: theme.typography.fontSize.base,
              fontWeight: theme.typography.fontWeight.medium,
              transition: "color 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;