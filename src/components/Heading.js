import React from "react";
import theme from "../theme";

const headingMap = {
  1: theme.typography.headings.h1,
  2: theme.typography.headings.h2,
  3: theme.typography.headings.h3
};

const Heading = ({ level = 1, children, style, ...props }) => {
  const Tag = `h${level}`;
  const headingStyle = headingMap[level] || headingMap[1];
  return (
    <Tag
      style={{
        fontSize: headingStyle.fontSize,
        fontWeight: headingStyle.fontWeight,
        lineHeight: headingStyle.lineHeight,
        letterSpacing: headingStyle.letterSpacing,
        color: headingStyle.color,
        fontFamily: theme.typography.fontFamily.primary,
        ...style
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;