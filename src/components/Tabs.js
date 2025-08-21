import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../ThemeProvider';
import Icon from './Icon';

const Tabs = ({
  tabs = [],
  defaultActiveTab = 0,
  activeTab,
  onTabChange,
  variant = "default", // "default", "pills", "underline", "vertical"
  size = "md", // "sm", "md", "lg"
  fullWidth = false,
  centered = false,
  scrollable = false,
  lazy = false, // 처음 활성화될 때만 콘텐츠 렌더링
  className = "",
  style = {},
  tabsClassName = "",
  tabsStyle = {},
  contentClassName = "",
  contentStyle = {}
}) => {
  const themeContext = useTheme();
  const theme = themeContext || {
    colors: {
      primary: {
        background: "rgb(8, 9, 10)",
        surface: "rgba(10, 10, 10, 0.8)",
        text: "rgb(247, 248, 248)",
        textSecondary: "rgba(255, 255, 255, 0.7)",
        textMuted: "rgb(138, 143, 152)",
        border: "rgba(255, 255, 255, 0.08)",
        accent: "rgb(94, 106, 210)"
      }
    },
    typography: {
      fontSize: {
        xs: "12px",
        sm: "13px",
        base: "16px",
        lg: "18px"
      },
      fontWeight: {
        normal: 400,
        medium: 510,
        semibold: 538
      }
    }
  };

  const [internalActiveTab, setInternalActiveTab] = useState(defaultActiveTab);
  const [loadedTabs, setLoadedTabs] = useState(new Set([defaultActiveTab]));
  const tabsRef = useRef(null);
  const indicatorRef = useRef(null);

  const currentActiveTab = activeTab !== undefined ? activeTab : internalActiveTab;

  // 탭 변경 핸들러
  const handleTabChange = (index, tab) => {
    if (tab.disabled) return;
    
    if (activeTab === undefined) {
      setInternalActiveTab(index);
    }
    
    if (lazy) {
      setLoadedTabs(prev => new Set([...prev, index]));
    }
    
    onTabChange?.(index, tab);
  };

  // 키보드 네비게이션
  const handleKeyDown = (e, index, tab) => {
    if (tab.disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleTabChange(index, tab);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = (index + 1) % tabs.length;
        const nextTab = tabs[nextIndex];
        if (!nextTab.disabled) {
          handleTabChange(nextIndex, nextTab);
        }
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = index === 0 ? tabs.length - 1 : index - 1;
        const prevTab = tabs[prevIndex];
        if (!prevTab.disabled) {
          handleTabChange(prevIndex, prevTab);
        }
        break;
         default:
    }
  };

  // 인디케이터 위치 업데이트
  useEffect(() => {
    if (variant === 'underline' && tabsRef.current && indicatorRef.current) {
      const activeTabElement = tabsRef.current.children[currentActiveTab];
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        indicatorRef.current.style.left = `${offsetLeft}px`;
        indicatorRef.current.style.width = `${offsetWidth}px`;
      }
    }
  }, [currentActiveTab, variant, tabs]);

  // 크기별 스타일
  const sizeConfig = {
    sm: {
      padding: '8px 12px',
      fontSize: theme.typography.fontSize.xs,
      minHeight: '32px'
    },
    md: {
      padding: '12px 16px',
      fontSize: theme.typography.fontSize.sm,
      minHeight: '40px'
    },
    lg: {
      padding: '16px 24px',
      fontSize: theme.typography.fontSize.base,
      minHeight: '48px'
    }
  };

  const sizeStyle = sizeConfig[size];

  // variant별 스타일
  const getTabStyle = (index, tab) => {
    const isActive = index === currentActiveTab;
    const baseStyle = {
      ...sizeStyle,
      border: 'none',
      background: 'none',
      cursor: tab.disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      fontWeight: isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal,
      opacity: tab.disabled ? 0.5 : 1,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      whiteSpace: scrollable ? 'nowrap' : 'normal', // 스크롤 모드가 아닐 때 텍스트 줄바꿈 허용
      outline: 'none',
      flexShrink: scrollable ? 0 : 1, // 스크롤 모드가 아닐 때 축소 허용
      minWidth: 'fit-content' // 최소 너비 보장
    };

    switch (variant) {
      case 'pills':
        return {
          ...baseStyle,
          borderRadius: '8px',
          backgroundColor: isActive ? theme.colors.primary.accent : 'transparent',
          color: isActive ? theme.colors.primary.text : theme.colors.primary.textSecondary,
          ':hover': !tab.disabled && !isActive ? {
            backgroundColor: theme.colors.primary.surface
          } : {}
        };
      
      case 'underline':
        return {
          ...baseStyle,
          borderBottom: '2px solid transparent',
          borderRadius: '0',
          color: isActive ? theme.colors.primary.accent : theme.colors.primary.textSecondary,
          ':hover': !tab.disabled && !isActive ? {
            color: theme.colors.primary.text
          } : {}
        };
      
      case 'vertical':
        return {
          ...baseStyle,
          justifyContent: 'flex-start',
          width: '100%',
          borderRadius: '6px',
          backgroundColor: isActive ? theme.colors.primary.accent : 'transparent',
          color: isActive ? theme.colors.primary.text : theme.colors.primary.textSecondary,
          marginBottom: '4px',
          ':hover': !tab.disabled && !isActive ? {
            backgroundColor: theme.colors.primary.surface
          } : {}
        };
      
      default:
        return {
          ...baseStyle,
          borderRadius: '6px 6px 0 0',
          backgroundColor: isActive ? theme.colors.primary.surface : 'transparent',
          color: isActive ? theme.colors.primary.text : theme.colors.primary.textSecondary,
          border: `1px solid ${isActive ? theme.colors.primary.border : 'transparent'}`,
          borderBottom: isActive ? 'none' : `1px solid ${theme.colors.primary.border}`,
          marginBottom: '-1px',
          ':hover': !tab.disabled && !isActive ? {
            backgroundColor: theme.colors.primary.surface + '50'
          } : {}
        };
    }
  };

  // 탭 목록 스타일
  const getTabsListStyle = () => {
    const baseStyle = {
      display: 'flex',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      position: 'relative'
    };

    if (variant === 'vertical') {
      return {
        ...baseStyle,
        flexDirection: 'column',
        width: '200px',
        flexShrink: 0
      };
    }

    return {
      ...baseStyle,
      borderBottom: variant === 'default' ? `1px solid ${theme.colors.primary.border}` : 'none',
      overflowX: scrollable ? 'auto' : 'visible',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      justifyContent: centered ? 'center' : 'flex-start',
      width: fullWidth ? '100%' : 'auto',
      flexWrap: scrollable ? 'nowrap' : 'wrap', // 스크롤 모드가 아닐 때 줄바꿈 허용
      gap: '4px' // 탭 간 간격 추가
    };
  };

  // 컨테이너 스타일
  const getContainerStyle = () => ({
    display: 'flex',
    flexDirection: variant === 'vertical' ? 'row' : 'column',
    ...style
  });

  // 콘텐츠 스타일
  const getContentStyle = () => ({
    padding: variant === 'vertical' ? '0 0 0 24px' : '24px 0 0 0',
    flex: 1,
    ...contentStyle
  });


  return (
    <div className={`tabs-container ${className}`} style={getContainerStyle()}>
      {/* 탭 목록 */}
      <div 
        ref={tabsRef}
        className={`tabs-list ${tabsClassName}`}
        style={{ ...getTabsListStyle(), ...tabsStyle }}
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id || index}
            className="tab-button"
            role="tab"
            tabIndex={index === currentActiveTab ? 0 : -1}
            aria-selected={index === currentActiveTab}
            aria-controls={`tabpanel-${tab.id || index}`}
            onClick={() => handleTabChange(index, tab)}
            onKeyDown={(e) => handleKeyDown(e, index, tab)}
            style={{
              ...getTabStyle(index, tab),
              ...(fullWidth && variant !== 'vertical' ? { flex: 1 } : {})
            }}
            onMouseEnter={(e) => {
              if (!tab.disabled && index !== currentActiveTab) {
                const hoverStyle = getTabStyle(index, tab)[':hover'];
                if (hoverStyle) {
                  Object.assign(e.target.style, hoverStyle);
                }
              }
            }}
            onMouseLeave={(e) => {
              if (!tab.disabled && index !== currentActiveTab) {
                const baseStyle = getTabStyle(index, tab);
                e.target.style.backgroundColor = baseStyle.backgroundColor;
                e.target.style.color = baseStyle.color;
              }
            }}
          >
            {tab.icon && (
              <Icon 
                name={tab.icon} 
                size={sizeStyle.fontSize === theme.typography.fontSize.xs ? 14 : 16} 
              />
            )}
            {tab.label}
            {tab.badge && (
              <span style={{
                backgroundColor: theme.colors.primary.accent,
                color: theme.colors.primary.text,
                fontSize: theme.typography.fontSize.xs,
                padding: '2px 6px',
                borderRadius: '10px',
                minWidth: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {tab.badge}
              </span>
            )}
            {tab.closable && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  tab.onClose?.(index, tab);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  padding: '2px',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <Icon name="x" size={12} />
              </button>
            )}
          </button>
        ))}
        
        {/* Underline 인디케이터 */}
        {variant === 'underline' && (
          <div
            ref={indicatorRef}
            style={{
              position: 'absolute',
              bottom: '-2px',
              height: '2px',
              backgroundColor: theme.colors.primary.accent,
              transition: 'all 0.3s ease',
              borderRadius: '1px'
            }}
          />
        )}
      </div>

      {/* 탭 콘텐츠 */}
      <div
        className={contentClassName}
        style={getContentStyle()}
      >
        {tabs.map((tab, index) => {
          const isActive = index === currentActiveTab;
          const shouldRender = lazy ? loadedTabs.has(index) : true;
          
          return (
            <div
              key={tab.id || index}
              role="tabpanel"
              id={`tabpanel-${tab.id || index}`}
              aria-labelledby={`tab-${tab.id || index}`}
              style={{
                display: isActive ? 'block' : 'none'
              }}
            >
              {shouldRender && (typeof tab.content === 'function' ? tab.content() : tab.content)}
            </div>
          );
        })}
      </div>

      <style>{`
        button:focus-visible {
          outline: 2px solid ${theme.colors.primary.accent};
          outline-offset: 2px;
        }
        
        /* 스크롤바 숨기기 */
        div::-webkit-scrollbar {
          display: none;
        }
        
        /* 모바일 환경에서 탭 최적화 */
        @media (max-width: 768px) {
          .tabs-container {
            overflow-x: visible;
          }
          
          .tabs-list {
            flex-wrap: wrap;
            gap: 8px 4px; /* 수직, 수평 간격 */
          }
          
          .tab-button {
            min-width: fit-content;
            flex-shrink: 1;
            white-space: normal;
            text-align: center;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};

// 편의 컴포넌트들
export const TabPanel = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const SimpleTabs = ({ children, ...props }) => {
  const tabs = React.Children.map(children, (child, index) => ({
    id: index,
    label: child.props.label,
    content: child.props.children,
    icon: child.props.icon,
    disabled: child.props.disabled,
    badge: child.props.badge
  }));

  return <Tabs tabs={tabs} {...props} />;
};

export const Tab = ({ label, icon, disabled, badge, children }) => {
  return <TabPanel>{children}</TabPanel>;
};

export default Tabs;