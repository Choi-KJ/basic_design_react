// Linear Theme Design Tokens (centralized)
const theme = {
  siteName: "Linear",
  tagline: "Linear is a purpose-built tool for planning and building products",
  description: "Meet the system for modern software development. Streamline issues, projects, and product roadmaps.",
  colors: {
    primary: {
      background: "rgb(8, 9, 10)",
      surface: "rgba(10, 10, 10, 0.8)",
      text: "rgb(247, 248, 248)",
      textSecondary: "rgba(255, 255, 255, 0.7)",
      textMuted: "rgb(138, 143, 152)",
      accent: "rgb(94, 106, 210)",
      accentLight: "rgb(230, 230, 230)",
      border: "rgba(255, 255, 255, 0.08)"
    },
    semantic: {
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
      info: "#3B82F6"
    }
  },
  typography: {
    fontFamily: {
      primary: '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    },
    fontSize: {
      xs: "12px",
      sm: "13px",
      base: "16px",
      lg: "21px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "56px"
    },
    fontWeight: {
      normal: 400,
      medium: 510,
      semibold: 538,
      bold: 700
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.75
    },
    letterSpacing: {
      tight: "-1.82px",
      normal: "-0.252px",
      wide: "0.025em"
    },
    headings: {
      h1: {
        fontSize: "56px",
        fontWeight: 538,
        lineHeight: "61.6px",
        letterSpacing: "-1.82px",
        color: "rgb(247, 248, 248)"
      },
      h2: {
        fontSize: "21px",
        fontWeight: 510,
        lineHeight: "27.93px",
        letterSpacing: "-0.252px",
        color: "rgba(255, 255, 255, 0.7)"
      },
      h3: {
        fontSize: "21px",
        fontWeight: 510,
        lineHeight: "28px",
        letterSpacing: "-0.37px",
        color: "rgb(247, 248, 248)"
      }
    },
    body: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "rgb(247, 248, 248)"
    },
    paragraph: {
      fontSize: "21px",
      fontWeight: 510,
      lineHeight: "27.93px",
      letterSpacing: "-0.252px",
      color: "rgb(138, 143, 152)"
    }
  },
  layout: {
    maxWidth: "1240px",
    headerHeight: "65px",
    mainPadding: "64px 0 0",
    sectionSpacing: "120px",
    containerPadding: "0 24px",
    grid: {
      columns: 12,
      gap: "24px"
    }
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
    "5xl": "128px"
  },
  borderRadius: {
    none: "0px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px"
  },
  shadows: {
    sm: "rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px",
    md: "rgba(0, 0, 0, 0.2) 0px 4px 24px 0px",
    lg: "rgba(0, 0, 0, 0.35) 0px 7px 32px 0px",
    xl: "rgba(0, 0, 0, 0.5) 0px 54px 73px 3px",
    inset: "rgba(255, 255, 255, 0.04) 0px 1.503px 5.261px 0px inset, rgba(255, 255, 255, 0.1) 0px -0.752px 0.752px 0px inset"
  },
  components: {
    header: {
      position: "fixed",
      top: 0,
      width: "100%",
      height: "65px",
      background: "rgba(10, 10, 10, 0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      zIndex: 1000
    },
    navigation: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      gap: "32px"
    },
    logo: {
      borderRadius: "6px"
    },
    button: {
      primary: {
        background: "rgb(94, 106, 210)",
        color: "rgb(255, 255, 255)",
        padding: "0 16px",
        height: "36px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: 510,
        border: "none",
        boxShadow: "rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px",
        transition: "all 0.15s ease"
      },
      secondary: {
        background: "transparent",
        color: "rgb(138, 143, 152)",
        padding: "0 12px",
        height: "32px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: 510,
        border: "none",
        transition: "color 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      },
      ghost: {
        background: "transparent",
        color: "rgb(247, 248, 248)",
        padding: "0 16px",
        borderRadius: "8px",
        border: "none",
        transition: "background 0.15s ease"
      }
    },
    card: {
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "12px",
      padding: "24px",
      backdropFilter: "blur(20px)"
    },
    hero: {
      textAlign: "center",
      padding: "120px 0",
      maxWidth: "800px",
      margin: "0 auto"
    }
  },
  animations: {
    transitions: {
      fast: "0.1s",
      normal: "0.15s",
      slow: "0.3s"
    },
    easings: {
      default: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out"
    },
    keyframes: {
      fadeIn: {
        from: {
          opacity: 0,
          transform: "translateY(20px)"
        },
        to: {
          opacity: 1,
          transform: "translateY(0)"
        }
      },
      slideIn: {
        from: {
          transform: "translateX(-100%)"
        },
        to: {
          transform: "translateX(0)"
        }
      }
    }
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1200px",
    ultraWide: "1440px"
  },
  structure: {
    sections: [
      { name: "Hero", components: ["heading", "subtitle", "cta", "hero-image"] },
      { name: "Customer Logos", components: ["logo-grid", "customer-link"] },
      { name: "Product Features", components: ["feature-tabs", "feature-showcase"] },
      { name: "Planning Tools", components: ["section-header", "feature-grid", "screenshots"] },
      { name: "Issue Tracking", components: ["section-header", "feature-cards", "demo-ui"] },
      { name: "AI Integration", components: ["ai-showcase", "feature-highlights"] },
      { name: "Integrations", components: ["integration-slider", "feature-cards"] },
      { name: "Security & Scale", components: ["compliance-badges", "feature-list"] },
      { name: "CTA Section", components: ["heading", "button-group"] },
      { name: "Footer", components: ["logo", "link-columns", "social-links"] }
    ]
  },
  spacingUnit: 8,
  content: {
    navigation: [
      "Product",
      "Resources",
      "Pricing",
      "Customers",
      "Now",
      "Contact"
    ],
    features: [
      "Project Planning",
      "Issue Tracking",
      "AI Integration",
      "Team Collaboration",
      "Analytics & Insights",
      "Enterprise Security"
    ],
    cta: {
      primary: "Start building",
      secondary: "Contact sales"
    }
  },
  designSystem: {
    principles: [
      "Minimal and clean",
      "Performance focused",
      "Accessibility first",
      "Developer friendly",
      "Consistent spacing",
      "Purposeful animations"
    ],
    tokens: {
      colors: "HSL based with opacity variations",
      typography: "Inter Variable font with optical sizing",
      spacing: "8px base unit with 1.5x scale",
      components: "Composable and reusable"
    }
  }
};

export default theme;