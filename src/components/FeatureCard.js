import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import theme from "../theme";

const FeatureCard = ({ title, description, icon, style, ...props }) => (
  <Card style={{ textAlign: "center", ...style }} {...props}>
    {icon && <div style={{ marginBottom: theme.spacing.sm }}>{icon}</div>}
    <Heading level={3}>{title}</Heading>
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
      {description}
    </div>
  </Card>
);

export default FeatureCard;