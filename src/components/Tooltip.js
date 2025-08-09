import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../ThemeProvider';

const Tooltip = ({
  children,
  content = "",
  position = "top", // "top", "bottom", "left", "right"
  trigger = "hover", // "hover", "click", "focus"
  delay = 200, // 표시 지연 시간 (ms)
  hideDelay = 0, // 숨김 지연 시간 (ms)
  disabled = false,
  variant = "dark", // "dark", "light"
  size = "md", // "sm", "md", "lg"
  maxWidth = "200px",
  arrow = true,
  className = "",
  style = {},
  tooltipClassName = "",
  tooltipStyle = {}
}) => {
  const themeContext = useTheme();
  const theme = themeContext || {
    colors: {
      primary: {
        background: "rgb(8, 9, 10)",
        surface: "rgba(10, 10, 10, 0.9)",
        text: "rgb(247, 248, 248)",
        textSecondary: "rgba(255, 255, 255, 0.7)",
        border: "rgba(255, 255, 255, 0.08)"
      }
    },
    typography: {
      fontSize: {
        xs: "12px",
        sm: "13px",
        base: "16px"
      }
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const showTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // 위치 계산
  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    let top, left;
    const arrowSize = arrow ? 8 : 0;
    const spacing = 8;

    switch (position) {
      case 'top':
        top = triggerRect.top + scrollTop - tooltipRect.height - arrowSize - spacing;
        left = triggerRect.left + scrollLeft + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollTop + arrowSize + spacing;
        left = triggerRect.left + scrollLeft + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + scrollTop + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left + scrollLeft - tooltipRect.width - arrowSize - spacing;
        break;
      case 'right':
        top = triggerRect.top + scrollTop + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + scrollLeft + arrowSize + spacing;
        break;
      default:
        top = triggerRect.top + scrollTop - tooltipRect.height - arrowSize - spacing;
        left = triggerRect.left + scrollLeft + (triggerRect.width - tooltipRect.width) / 2;
    }

    // 화면 경계 체크 및 조정
    const padding = 16;
    if (left < padding) left = padding;
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }
    if (top < padding) {
      if (position === 'top') {
        top = triggerRect.bottom + scrollTop + arrowSize + spacing;
      }
    }
    if (top + tooltipRect.height > window.innerHeight + scrollTop - padding) {
      if (position === 'bottom') {
        top = triggerRect.top + scrollTop - tooltipRect.height - arrowSize - spacing;
      }
    }

    setTooltipPosition({ top, left });
  };

  // 표시/숨김 함수
  const showTooltip = () => {
    if (disabled || !content) return;
    
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }

    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, hideDelay);
  };

  // 위치 업데이트
  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [isVisible, position]);

  // 클린업
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // 이벤트 핸들러
  const eventHandlers = {};

  if (trigger === 'hover') {
    eventHandlers.onMouseEnter = showTooltip;
    eventHandlers.onMouseLeave = hideTooltip;
  } else if (trigger === 'click') {
    eventHandlers.onClick = () => {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    };
  } else if (trigger === 'focus') {
    eventHandlers.onFocus = showTooltip;
    eventHandlers.onBlur = hideTooltip;
  }

  // 크기별 스타일
  const sizeConfig = {
    sm: { padding: '6px 8px', fontSize: theme.typography.fontSize.xs },
    md: { padding: '8px 12px', fontSize: theme.typography.fontSize.sm },
    lg: { padding: '12px 16px', fontSize: theme.typography.fontSize.base }
  };

  const sizeStyle = sizeConfig[size];

  // variant별 스타일
  const variantConfig = {
    dark: {
      backgroundColor: theme.colors.primary.surface,
      color: theme.colors.primary.text,
      border: `1px solid ${theme.colors.primary.border}`,
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
    },
    light: {
      backgroundColor: '#ffffff',
      color: '#1f2937',
      border: '1px solid #e5e7eb',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
    }
  };

  const variantStyle = variantConfig[variant];

  // 화살표 스타일
  const getArrowStyle = () => {
    const arrowBase = {
      position: 'absolute',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    };

    const arrowColor = variant === 'dark' 
      ? theme.colors.primary.surface 
      : '#ffffff';
    const borderColor = variant === 'dark' 
      ? theme.colors.primary.border 
      : '#e5e7eb';

    switch (position) {
      case 'top':
        return {
          ...arrowBase,
          bottom: '-9px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '8px 8px 0 8px',
          borderColor: `${arrowColor} transparent transparent transparent`
        };
      case 'bottom':
        return {
          ...arrowBase,
          top: '-9px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderWidth: '0 8px 8px 8px',
          borderColor: `transparent transparent ${arrowColor} transparent`
        };
      case 'left':
        return {
          ...arrowBase,
          right: '-9px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderWidth: '8px 0 8px 8px',
          borderColor: `transparent transparent transparent ${arrowColor}`
        };
      case 'right':
        return {
          ...arrowBase,
          left: '-9px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderWidth: '8px 8px 8px 0',
          borderColor: `transparent ${arrowColor} transparent transparent`
        };
      default:
        return arrowBase;
    }
  };

  const tooltipContent = isVisible ? (
    <div
      ref={tooltipRef}
      className={tooltipClassName}
      style={{
        position: 'absolute',
        top: tooltipPosition.top,
        left: tooltipPosition.left,
        zIndex: 1200,
        borderRadius: '8px',
        backdropFilter: 'blur(20px)',
        maxWidth: maxWidth,
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        lineHeight: 1.4,
        fontWeight: 400,
        pointerEvents: trigger === 'hover' ? 'none' : 'auto',
        animation: 'tooltipFadeIn 0.2s ease-out',
        ...sizeStyle,
        ...variantStyle,
        ...tooltipStyle
      }}
      onMouseEnter={trigger === 'hover' ? showTooltip : undefined}
      onMouseLeave={trigger === 'hover' ? hideTooltip : undefined}
    >
      {content}
      {arrow && <div style={getArrowStyle()} />}
      
      <style>{`
        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  ) : null;

  return (
    <>
      <span
        ref={triggerRef}
        className={className}
        style={{ display: 'inline-block', ...style }}
        {...eventHandlers}
      >
        {children}
      </span>
      {tooltipContent && createPortal(tooltipContent, document.body)}
    </>
  );
};

// 간편 사용을 위한 래퍼 컴포넌트들
export const TooltipButton = ({ tooltip, children, ...props }) => (
  <Tooltip content={tooltip}>
    <button {...props}>{children}</button>
  </Tooltip>
);

export const TooltipIcon = ({ tooltip, children, ...props }) => (
  <Tooltip content={tooltip} position="top" size="sm">
    <span {...props}>{children}</span>
  </Tooltip>
);

export const TooltipText = ({ tooltip, children, ...props }) => (
  <Tooltip content={tooltip} trigger="hover" position="top">
    <span style={{ borderBottom: '1px dotted currentColor', cursor: 'help' }} {...props}>
      {children}
    </span>
  </Tooltip>
);

export default Tooltip;