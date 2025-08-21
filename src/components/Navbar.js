/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import theme from "../theme";
import Button from "./Button";
import Icon from "./Icon";
import Badge from "./Badge";

const navbarStyles = {
  container: {
    position: "sticky",
    top: 0,
    width: "100%",
    background: "rgba(8, 9, 10, 0.95)",
    backdropFilter: "blur(20px)",
    borderBottom: `1px solid ${theme.colors.primary.border}`,
    zIndex: 1000,
    transition: "all 0.2s ease"
  },
  content: {
    maxWidth: theme.layout.maxWidth,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
    position: "relative"
  },
  contentDesktop: {
    padding: `0 ${theme.spacing.lg}`
  },
  contentMobile: {
    padding: `0 ${theme.spacing.md}`
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm,
    textDecoration: "none",
    color: theme.colors.primary.text,
    fontSize: "20px",
    fontWeight: theme.typography.fontWeight.semibold,
    zIndex: 1001
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.lg
  },
  navList: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.md,
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  navListMobile: {
    display: "none"
  },
  navLink: {
    color: theme.colors.primary.textSecondary,
    textDecoration: "none",
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.sm,
    transition: "all 0.2s ease",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.xs
  },
  navLinkHover: {
    color: theme.colors.primary.text,
    background: "rgba(255, 255, 255, 0.05)"
  },
  navLinkActive: {
    color: theme.colors.primary.accent,
    background: "rgba(94, 106, 210, 0.1)"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm
  },
  mobileMenuButton: {
    cursor: "pointer",
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    background: "transparent",
    border: "none",
    color: theme.colors.primary.text,
    zIndex: 1001,
    minWidth: "44px",
    minHeight: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  mobileMenuOpen: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "rgba(8, 9, 10, 0.98)",
    backdropFilter: "blur(20px)",
    borderBottom: `1px solid ${theme.colors.primary.border}`,
    padding: theme.spacing.lg,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.sm,
    zIndex: 10000
  },
  mobileNavLink: {
    color: theme.colors.primary.textSecondary,
    textDecoration: "none",
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm,
    minHeight: "44px",
    width: "100%"
  },
  mobileActions: {
    marginTop: theme.spacing.md,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.sm
  }
};

const Navbar = ({
  logo = "Linear",
  logoIcon = "home",
  links = [],
  actions = [],
  variant = "default",
  sticky = true,
  style,
  onLinkClick,
  ...props
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const navRef = useRef(null);
  // 초기값을 window가 있는지 확인 후 설정
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth <= 768;
      console.log('Window width:', window.innerWidth, 'isMobile:', mobile); // 임시 디버깅
      setIsMobile(mobile);
      // 데스크톱으로 전환시 모바일 메뉴 닫기
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    // 컴포넌트 마운트시 즉시 체크
    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [isMobileMenuOpen]);

  const defaultLinks = [
    { label: "Products", href: "#", badge: null },
    { label: "Solutions", href: "#", badge: null },
    { label: "Resources", href: "#", badge: null },
    { label: "Pricing", href: "#", badge: null },
    { label: "Blog", href: "#", badge: { text: "New", variant: "primary" } }
  ];

  const defaultActions = [
    { type: "link", label: "Sign in", href: "#" },
    { type: "button", label: "Get started", variant: "primary", href: "#" }
  ];

  const linksToRender = links.length > 0 ? links : defaultLinks;
  const actionsToRender = actions.length > 0 ? actions : defaultActions;

  const containerStyle = {
    ...navbarStyles.container,
    position: sticky ? "sticky" : "static",
    ...style
  };

  const handleLinkClick = (link, event) => {
    setActiveLink(link.href);
    if (onLinkClick) {
      onLinkClick(link, event);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen && navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMenuPosition({ 
        top: rect.bottom + window.scrollY, 
        left: rect.left + window.scrollX 
      });
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  console.log('Navbar render - isMobile:', isMobile, 'window.innerWidth:', typeof window !== 'undefined' ? window.innerWidth : 'undefined'); // 임시 디버깅

  const mobileMenu = isMobile && isMobileMenuOpen ? createPortal(
    <div style={{
      ...navbarStyles.mobileMenuOpen,
      position: "absolute",
      top: menuPosition.top,
      left: 0,
      right: 0,
      zIndex: 10000
    }}>
      {/* Mobile Navigation Links */}
      {linksToRender.map((link, index) => (
        <a
          key={index}
          href={link.href}
          style={navbarStyles.mobileNavLink}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, navbarStyles.navLinkHover);
          }}
          onMouseLeave={(e) => {
            e.target.style.color = navbarStyles.mobileNavLink.color;
            e.target.style.background = "transparent";
          }}
          onClick={(e) => handleLinkClick(link, e)}
        >
          {link.label}
          {link.badge && (
            <Badge 
              variant={link.badge.variant || "default"} 
              size="sm"
            >
              {link.badge.text}
            </Badge>
          )}
        </a>
      ))}
      
      {/* Mobile Actions */}
      <div style={navbarStyles.mobileActions}>
        {actionsToRender.map((action, index) => (
          action.type === "button" ? (
            <Button 
              key={index} 
              variant={action.variant || "primary"}
              onClick={() => {
                if (action.href) window.location.href = action.href;
                setIsMobileMenuOpen(false);
              }}
              style={{ width: "100%" }}
            >
              {action.label}
            </Button>
          ) : (
            <a
              key={index}
              href={action.href}
              style={navbarStyles.mobileNavLink}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, navbarStyles.navLinkHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.color = navbarStyles.mobileNavLink.color;
                e.target.style.background = "transparent";
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {action.label}
            </a>
          )
        ))}
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
    <nav ref={navRef} style={containerStyle} {...props}>
      <div style={{
        ...navbarStyles.content,
        ...(isMobile ? navbarStyles.contentMobile : navbarStyles.contentDesktop)
      }}>
        {/* Brand */}
        <a href="#" onClick={(e) => e.preventDefault()}>
          {logoIcon && <Icon name={logoIcon} size={24} />}
          {logo}
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={navbarStyles.nav}>
            <ul style={navbarStyles.navList}>
              {linksToRender.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      ...navbarStyles.navLink,
                      ...(activeLink === link.href ? navbarStyles.navLinkActive : {})
                    }}
                    onMouseEnter={(e) => {
                      if (activeLink !== link.href) {
                        Object.assign(e.target.style, navbarStyles.navLinkHover);
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeLink !== link.href) {
                        e.target.style.color = navbarStyles.navLink.color;
                        e.target.style.background = navbarStyles.navLink.background || "transparent";
                      }
                    }}
                    onClick={(e) => handleLinkClick(link, e)}
                  >
                    {link.label}
                    {link.badge && (
                      <Badge 
                        variant={link.badge.variant || "default"} 
                        size="sm"
                      >
                        {link.badge.text}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div style={navbarStyles.actions}>
              {actionsToRender.map((action, index) => (
                action.type === "button" ? (
                  <Button 
                    key={index} 
                    variant={action.variant || "primary"}
                    onClick={() => action.href && (window.location.href = action.href)}
                  >
                    {action.label}
                  </Button>
                ) : (
                  <a
                    key={index}
                    href={action.href}
                    style={navbarStyles.navLink}
                    onMouseEnter={(e) => {
                      Object.assign(e.target.style, navbarStyles.navLinkHover);
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = navbarStyles.navLink.color;
                      e.target.style.background = "transparent";
                    }}
                  >
                    {action.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu Button - 임시로 항상 표시 */}
        <button
          style={{
            ...navbarStyles.mobileMenuButton,
            display: isMobile ? "flex" : "none"
          }}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Icon name={isMobileMenuOpen ? "x" : "menu"} size={20} />
          <span style={{fontSize: '10px', marginLeft: '4px'}}>
            {isMobile ? 'M' : 'D'} {/* 임시 디버깅 표시 */}
          </span>
        </button>
      </div>
    </nav>
    {mobileMenu}
    </>
  );
};

export default Navbar;