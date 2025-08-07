import React from "react";
import theme from "../theme";
import Button from "./Button";
import Badge from "./Badge";

const heroStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "500px",
    padding: `${theme.spacing["4xl"]} ${theme.spacing.lg}`,
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -2
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: -1
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
    zIndex: 1
  },
  badge: {
    marginBottom: theme.spacing.md
  },
  title: {
    fontSize: theme.typography.headings.h1.fontSize,
    fontWeight: theme.typography.headings.h1.fontWeight,
    lineHeight: theme.typography.headings.h1.lineHeight,
    letterSpacing: theme.typography.headings.h1.letterSpacing,
    color: theme.typography.headings.h1.color,
    marginBottom: theme.spacing.lg,
    margin: 0
  },
  subtitle: {
    fontSize: theme.typography.paragraph.fontSize,
    fontWeight: theme.typography.paragraph.fontWeight,
    lineHeight: theme.typography.paragraph.lineHeight,
    letterSpacing: theme.typography.paragraph.letterSpacing,
    color: theme.typography.paragraph.color,
    marginBottom: theme.spacing["2xl"],
    margin: `0 0 ${theme.spacing["2xl"]} 0`
  },
  actions: {
    display: "flex",
    gap: theme.spacing.md,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  variants: {
    default: {
      background: theme.colors.primary.background,
      border: "none"
    },
    gradient: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none"
    },
    image: {
      background: "transparent",
      border: "none"
    }
  }
};

const Hero = ({
  badge,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundImage,
  variant = "default",
  minHeight = "500px",
  style,
  children,
  ...props
}) => {
  const containerStyle = {
    ...heroStyles.container,
    ...heroStyles.variants[variant],
    minHeight,
    ...style
  };

  return (
    <section style={containerStyle} {...props}>
      {backgroundImage && (
        <>
          <div 
            style={{ 
              ...heroStyles.backgroundImage, 
              backgroundImage: `url(${backgroundImage})` 
            }} 
          />
          <div style={heroStyles.overlay} />
        </>
      )}
      
      <div style={heroStyles.content}>
        {badge && (
          <div style={heroStyles.badge}>
            {typeof badge === "string" ? (
              <Badge variant="primary">{badge}</Badge>
            ) : (
              badge
            )}
          </div>
        )}
        
        {title && (
          <h1 style={heroStyles.title}>
            {title}
          </h1>
        )}
        
        {subtitle && (
          <p style={heroStyles.subtitle}>
            {subtitle}
          </p>
        )}
        
        {children}
        
        {(primaryAction || secondaryAction) && (
          <div style={heroStyles.actions}>
            {primaryAction && (
              typeof primaryAction === "string" ? (
                <Button variant="primary">{primaryAction}</Button>
              ) : (
                primaryAction
              )
            )}
            {secondaryAction && (
              typeof secondaryAction === "string" ? (
                <Button variant="ghost">{secondaryAction}</Button>
              ) : (
                secondaryAction
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;