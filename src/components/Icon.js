import React from "react";
import { useTheme } from "../ThemeProvider";

const Icon = ({ 
  name, 
  size = 20, 
  color,
  style,
  ...props 
}) => {
  const theme = useTheme();
  
  const iconColor = color || theme.colors.primary.text;

  const getIconPath = (iconName) => {
    const icons = {
      search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      mail: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      lock: "M5 13l4 4L19 7",
      eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 110 6 3 3 0 010-6z",
      "eye-off": "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 01-4.24-4.24",
      home: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
      settings: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z",
      bell: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0",
      heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
      star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      check: "M20 6L9 17l-5-5",
      x: "M18 6L6 18M6 6l12 12",
      plus: "M12 5v14M5 12h14",
      minus: "M5 12h14",
      "arrow-right": "M5 12h14M12 5l7 7-7 7",
      "arrow-left": "M19 12H5M12 19l-7-7 7-7",
      "arrow-up": "M12 19V5M5 12l7-7 7 7",
      "arrow-down": "M12 5v14M19 12l-7 7-7-7",
      "chevron-right": "M9 18l6-6-6-6",
      "chevron-left": "M15 18l-6-6 6-6",
      "chevron-up": "M18 15l-6-6-6 6",
      "chevron-down": "M6 9l6 6 6-6",
      menu: "M4 6h16M4 12h16M4 18h16",
      "more-vertical": "M12 5v.01M12 12v.01M12 19v.01",
      "more-horizontal": "M5 12h.01M12 12h.01M19.01 12h.01",
      play: "M8 5v14l11-7z",
      pause: "M6 4h4v16H6zM14 4h4v16h-4z"
    };

    return icons[iconName] || icons.home;
  };

  const iconStyles = {
    width: size,
    height: size,
    fill: "none",
    stroke: iconColor,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    display: "inline-block",
    verticalAlign: "middle",
    ...style
  };

  return (
    <svg
      style={iconStyles}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d={getIconPath(name)} />
    </svg>
  );
};

export default Icon;