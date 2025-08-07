import React from "react";
import theme from "../theme";
import Icon from "./Icon";

const footerStyles = {
  container: {
    background: "rgba(8, 9, 10, 0.95)",
    borderTop: `1px solid ${theme.colors.primary.border}`,
    padding: `${theme.spacing["3xl"]} 0 ${theme.spacing.lg}`,
    backdropFilter: "blur(20px)"
  },
  content: {
    maxWidth: theme.layout.maxWidth,
    margin: "0 auto",
    padding: `0 ${theme.spacing.lg}`
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: theme.spacing["2xl"],
    marginBottom: theme.spacing["2xl"]
  },
  brand: {
    marginBottom: theme.spacing.lg
  },
  logo: {
    fontSize: "24px",
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary.text,
    marginBottom: theme.spacing.sm,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm
  },
  description: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary.textMuted,
    lineHeight: theme.typography.lineHeight.relaxed,
    marginBottom: theme.spacing.md
  },
  social: {
    display: "flex",
    gap: theme.spacing.sm,
    alignItems: "center"
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: theme.borderRadius.sm,
    background: "rgba(255, 255, 255, 0.05)",
    color: theme.colors.primary.textSecondary,
    textDecoration: "none",
    transition: "all 0.2s ease",
    border: `1px solid ${theme.colors.primary.border}`
  },
  socialLinkHover: {
    background: "rgba(255, 255, 255, 0.1)",
    color: theme.colors.primary.text,
    transform: "translateY(-2px)"
  },
  section: {
    marginBottom: theme.spacing.lg
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.primary.text,
    marginBottom: theme.spacing.md,
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.sm
  },
  link: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.primary.textMuted,
    textDecoration: "none",
    transition: "color 0.2s ease",
    padding: "2px 0"
  },
  linkHover: {
    color: theme.colors.primary.text
  },
  bottom: {
    paddingTop: theme.spacing.lg,
    borderTop: `1px solid ${theme.colors.primary.border}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: theme.spacing.md
  },
  copyright: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.primary.textMuted
  },
  bottomLinks: {
    display: "flex",
    gap: theme.spacing.lg,
    flexWrap: "wrap"
  },
  bottomLink: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.primary.textMuted,
    textDecoration: "none",
    transition: "color 0.2s ease"
  },
  bottomLinkHover: {
    color: theme.colors.primary.text
  }
};

const Footer = ({
  logo = "Linear",
  description,
  socialLinks = [],
  sections = [],
  copyright,
  bottomLinks = [],
  style,
  ...props
}) => {
  const defaultSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Changelog", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Community", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Status", href: "#" },
        { label: "API", href: "#" }
      ]
    }
  ];

  const defaultSocialLinks = [
    { icon: "mail", href: "#", label: "Email" },
    { icon: "user", href: "#", label: "Profile" },
    { icon: "heart", href: "#", label: "Favorites" }
  ];

  const sectionsToRender = sections.length > 0 ? sections : defaultSections;
  const socialLinksToRender = socialLinks.length > 0 ? socialLinks : defaultSocialLinks;

  return (
    <footer style={{ ...footerStyles.container, ...style }} {...props}>
      <div style={footerStyles.content}>
        <div style={footerStyles.main}>
          {/* Brand Section */}
          <div>
            <div style={footerStyles.brand}>
              <div style={footerStyles.logo}>
                <Icon name="home" size={24} />
                {logo}
              </div>
              {description && (
                <p style={footerStyles.description}>
                  {description}
                </p>
              )}
              <div style={footerStyles.social}>
                {socialLinksToRender.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    style={footerStyles.socialLink}
                    onMouseEnter={(e) => {
                      Object.assign(e.target.style, footerStyles.socialLinkHover);
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = footerStyles.socialLink.background;
                      e.target.style.color = footerStyles.socialLink.color;
                      e.target.style.transform = "translateY(0)";
                    }}
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Sections */}
          {sectionsToRender.map((section, index) => (
            <div key={index} style={footerStyles.section}>
              <h3 style={footerStyles.sectionTitle}>{section.title}</h3>
              <div style={footerStyles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    style={footerStyles.link}
                    onMouseEnter={(e) => {
                      e.target.style.color = footerStyles.linkHover.color;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = footerStyles.link.color;
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={footerStyles.bottom}>
          <div style={footerStyles.copyright}>
            {copyright || `© ${new Date().getFullYear()} ${logo}. All rights reserved.`}
          </div>
          
          {bottomLinks.length > 0 && (
            <div style={footerStyles.bottomLinks}>
              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={footerStyles.bottomLink}
                  onMouseEnter={(e) => {
                    e.target.style.color = footerStyles.bottomLinkHover.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = footerStyles.bottomLink.color;
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;