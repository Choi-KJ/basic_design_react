import React from "react";
import theme from "../theme";
import logo from "../logo.svg";

const Logo = ({ size = 40, style, ...props }) => (
  <img
    src={logo}
    alt="Logo"
    style={{
      width: size,
      height: size,
      borderRadius: theme.components.logo.borderRadius,
      ...style
    }}
    {...props}
  />
);

export default Logo;