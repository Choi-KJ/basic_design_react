import React from 'react';
import { useTheme } from '../ThemeProvider';

const Loading = ({
  type = "spinner", // "spinner", "dots", "pulse", "bars", "ring", "progress"
  size = "md", // "xs", "sm", "md", "lg", "xl"
  color = "primary", // "primary", "secondary", "white", "accent"
  text = "",
  overlay = false,
  fullscreen = false,
  className = "",
  style = {}
}) => {
  const themeContext = useTheme();
  const theme = themeContext || {
    colors: {
      primary: {
        accent: "rgb(94, 106, 210)",
        text: "rgb(247, 248, 248)",
        textSecondary: "rgba(255, 255, 255, 0.7)",
        textMuted: "rgb(138, 143, 152)"
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

  // 크기별 스타일
  const sizeConfig = {
    xs: { size: 16, strokeWidth: 2, fontSize: theme.typography.fontSize.xs },
    sm: { size: 20, strokeWidth: 2, fontSize: theme.typography.fontSize.xs },
    md: { size: 32, strokeWidth: 3, fontSize: theme.typography.fontSize.sm },
    lg: { size: 48, strokeWidth: 4, fontSize: theme.typography.fontSize.base },
    xl: { size: 64, strokeWidth: 4, fontSize: theme.typography.fontSize.base }
  };

  const config = sizeConfig[size];

  // 색상 설정
  const getColor = () => {
    switch (color) {
      case 'primary':
        return theme.colors.primary.accent;
      case 'secondary':
        return theme.colors.primary.textSecondary;
      case 'white':
        return '#ffffff';
      case 'accent':
        return theme.colors.primary.accent;
      default:
        return color; // 커스텀 색상
    }
  };

  const spinnerColor = getColor();

  // 애니메이션 스타일
  const animations = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.95); }
    }

    @keyframes bounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.7; }
      40% { transform: translateY(-10px); opacity: 1; }
    }

    @keyframes bars {
      0%, 40%, 100% { transform: scaleY(0.4); }
      20% { transform: scaleY(1.0); }
    }

    @keyframes ring {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes progress {
      0% { width: 0%; }
      50% { width: 70%; }
      100% { width: 100%; }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  // 스피너 타입별 컴포넌트
  const renderSpinner = () => {
    switch (type) {
      case 'spinner':
        return (
          <div
            style={{
              width: config.size,
              height: config.size,
              border: `${config.strokeWidth}px solid rgba(255, 255, 255, 0.1)`,
              borderTop: `${config.strokeWidth}px solid ${spinnerColor}`,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}
          />
        );

      case 'dots':
        return (
          <div style={{ display: 'flex', gap: config.size * 0.2 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: config.size * 0.25,
                  height: config.size * 0.25,
                  backgroundColor: spinnerColor,
                  borderRadius: '50%',
                  animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite both`
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div
            style={{
              width: config.size,
              height: config.size,
              backgroundColor: spinnerColor,
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
        );

      case 'bars':
        return (
          <div style={{ display: 'flex', gap: config.size * 0.1, alignItems: 'center' }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: config.size * 0.12,
                  height: config.size,
                  backgroundColor: spinnerColor,
                  borderRadius: config.size * 0.02,
                  animation: `bars 1.2s ease-in-out ${i * 0.1}s infinite`
                }}
              />
            ))}
          </div>
        );

      case 'ring':
        return (
          <div
            style={{
              width: config.size,
              height: config.size,
              border: `${config.strokeWidth}px solid transparent`,
              borderTop: `${config.strokeWidth}px solid ${spinnerColor}`,
              borderRight: `${config.strokeWidth}px solid ${spinnerColor}`,
              borderRadius: '50%',
              animation: 'ring 1s linear infinite'
            }}
          />
        );

      case 'progress':
        return (
          <div
            style={{
              width: config.size * 2,
              height: config.strokeWidth * 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: config.strokeWidth,
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundColor: spinnerColor,
                borderRadius: config.strokeWidth,
                animation: 'progress 2s ease-in-out infinite'
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  // 컨테이너 스타일
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: text ? '12px' : 0,
    ...style
  };

  // 오버레이 스타일
  const overlayStyle = {
    position: fullscreen ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(2px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    animation: 'fade-in 0.2s ease-out'
  };

  const content = (
    <div className={className} style={containerStyle}>
      <style>{animations}</style>
      {renderSpinner()}
      {text && (
        <div
          style={{
            color: spinnerColor,
            fontSize: config.fontSize,
            fontWeight: 500,
            textAlign: 'center',
            marginTop: '8px'
          }}
        >
          {text}
        </div>
      )}
    </div>
  );

  if (overlay || fullscreen) {
    return (
      <div style={overlayStyle}>
        {content}
      </div>
    );
  }

  return content;
};

// 편의 컴포넌트들
export const Spinner = (props) => <Loading type="spinner" {...props} />;
export const Dots = (props) => <Loading type="dots" {...props} />;
export const Pulse = (props) => <Loading type="pulse" {...props} />;
export const Bars = (props) => <Loading type="bars" {...props} />;
export const Ring = (props) => <Loading type="ring" {...props} />;
export const Progress = (props) => <Loading type="progress" {...props} />;

// 로딩 상태를 관리하는 HOC
export const withLoading = (Component, LoadingComponent = Loading) => {
  return ({ loading = false, loadingProps = {}, ...props }) => {
    if (loading) {
      return <LoadingComponent {...loadingProps} />;
    }
    return <Component {...props} />;
  };
};

// 로딩 오버레이 래퍼
export const LoadingOverlay = ({ loading = false, children, ...loadingProps }) => {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      {loading && (
        <Loading
          overlay={true}
          {...loadingProps}
        />
      )}
    </div>
  );
};

// 버튼 로딩 상태
export const LoadingButton = ({ 
  loading = false, 
  children, 
  onClick,
  disabled,
  loadingText = "",
  loadingSize = "sm",
  ...buttonProps 
}) => {
  const handleClick = async (e) => {
    if (loading || disabled) return;
    if (onClick) {
      await onClick(e);
    }
  };

  return (
    <button
      {...buttonProps}
      onClick={handleClick}
      disabled={loading || disabled}
      style={{
        ...buttonProps.style,
        opacity: loading || disabled ? 0.7 : 1,
        cursor: loading || disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}
    >
      {loading && (
        <Loading
          type="spinner"
          size={loadingSize}
          color="white"
        />
      )}
      {loading && loadingText ? loadingText : children}
    </button>
  );
};

export default Loading;