import React from "react";
import Heading from "./Heading";
import theme from "../theme";

const SectionHeader = ({ title, subtitle, style, ...props }) => (
  <div style={{ marginBottom: theme.spacing.lg, ...style }} {...props}>
    <Heading level={2}>{title}</Heading>
    {subtitle && (
      <div
        style={{
          fontSize: theme.typography.paragraph.fontSize,
          fontWeight: theme.typography.paragraph.fontWeight,
          lineHeight: theme.typography.paragraph.lineHeight,
          letterSpacing: theme.typography.paragraph.letterSpacing,
          color: theme.typography.paragraph.color,
          marginTop: theme.spacing.xs
        }}
      >
        {subtitle}
      </div>
    )}
  </div>
);

export default SectionHeader;