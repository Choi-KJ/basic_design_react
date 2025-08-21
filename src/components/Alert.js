import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../ThemeProvider';
import Icon from './Icon';

// 단일 알림 컴포넌트
const Alert = ({
  id = Date.now(),
  type = "info", // "success", "error", "warning", "info"
  title = "",
  message = "",
  duration = 5000, // 0 = 자동으로 사라지지 않음
  position = "top-right", // "top-right", "top-left", "top-center", "bottom-right", "bottom-left", "bottom-center"
  closable = true,
  onClose,
  icon = true,
  action = null, // { label: "액션", onClick: () => {} }
  className = "",
  style = {}
}) => {
  const themeContext = useTheme();
  const theme = themeContext || {
    colors: {
      primary: {
        background: "rgb(8, 9, 10)",
        surface: "rgba(10, 10, 10, 0.8)",
        text: "rgb(247, 248, 248)",
        textSecondary: "rgba(255, 255, 255, 0.7)",
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
      fontSize: {
        xs: "12px",
        sm: "13px",
        base: "16px"
      },
      fontWeight: {
        medium: 510,
        semibold: 538
      }
    }
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.(id);
    }, 300); // 애니메이션 시간
  }, [id, onClose]);

  // 자동 닫기
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, handleClose]);

  // 타입별 설정
  const typeConfig = {
    success: {
      color: theme.colors.semantic.success,
      backgroundColor: theme.colors.semantic.success + '15',
      borderColor: theme.colors.semantic.success + '30',
      icon: 'check-circle'
    },
    error: {
      color: theme.colors.semantic.error,
      backgroundColor: theme.colors.semantic.error + '15',
      borderColor: theme.colors.semantic.error + '30',
      icon: 'x-circle'
    },
    warning: {
      color: theme.colors.semantic.warning,
      backgroundColor: theme.colors.semantic.warning + '15',
      borderColor: theme.colors.semantic.warning + '30',
      icon: 'alert-triangle'
    },
    info: {
      color: theme.colors.semantic.info,
      backgroundColor: theme.colors.semantic.info + '15',
      borderColor: theme.colors.semantic.info + '30',
      icon: 'info'
    }
  };

  const config = typeConfig[type];

  if (!isVisible) return null;

  const alertStyle = {
    backgroundColor: theme.colors.primary.surface,
    border: `1px solid ${config.borderColor}`,
    borderLeft: `4px solid ${config.color}`,
    borderRadius: '8px',
    padding: '16px',
    minWidth: '300px',
    maxWidth: '500px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    animation: isLeaving ? 'slideOut 0.3s ease-in forwards' : 'slideIn 0.3s ease-out',
    ...style
  };

  return (
    <div className={className} style={alertStyle}>
      {/* 아이콘 */}
      {icon && (
        <div style={{ flexShrink: 0, marginTop: '2px' }}>
          <Icon 
            name={config.icon} 
            size={20} 
            color={config.color}
          />
        </div>
      )}

      {/* 콘텐츠 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div style={{
            fontSize: theme.typography.fontSize.base,
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.primary.text,
            marginBottom: message ? '4px' : 0,
            lineHeight: 1.4
          }}>
            {title}
          </div>
        )}
        {message && (
          <div style={{
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.primary.textSecondary,
            lineHeight: 1.5
          }}>
            {message}
          </div>
        )}
        
        {/* 액션 버튼 */}
        {action && (
          <div style={{ marginTop: '8px' }}>
            <button
              onClick={action.onClick}
              style={{
                background: 'none',
                border: `1px solid ${config.color}`,
                color: config.color,
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: theme.typography.fontSize.xs,
                fontWeight: theme.typography.fontWeight.medium,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = config.color + '20';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              {action.label}
            </button>
          </div>
        )}
      </div>

      {/* 닫기 버튼 */}
      {closable && (
        <button
          onClick={handleClose}
          style={{
            background: 'none',
            border: 'none',
            color: theme.colors.primary.textSecondary,
            cursor: 'pointer',
            padding: '2px',
            borderRadius: '4px',
            flexShrink: 0,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = theme.colors.primary.surface;
            e.target.style.color = theme.colors.primary.text;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = theme.colors.primary.textSecondary;
          }}
        >
          <Icon name="x" size={16} />
        </button>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
            max-height: 200px;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
            max-height: 0;
            padding: 0;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

// 알림 컨테이너 컴포넌트
const AlertContainer = ({ position = "top-right", alerts = [], onClose }) => {
  // 위치별 스타일
  const getPositionStyle = () => {
    const baseStyle = {
      position: 'fixed',
      zIndex: 1100,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '20px',
      pointerEvents: 'none'
    };

    switch (position) {
      case 'top-right':
        return { ...baseStyle, top: 0, right: 0 };
      case 'top-left':
        return { ...baseStyle, top: 0, left: 0 };
      case 'top-center':
        return { ...baseStyle, top: 0, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-right':
        return { ...baseStyle, bottom: 0, right: 0, flexDirection: 'column-reverse' };
      case 'bottom-left':
        return { ...baseStyle, bottom: 0, left: 0, flexDirection: 'column-reverse' };
      case 'bottom-center':
        return { ...baseStyle, bottom: 0, left: '50%', transform: 'translateX(-50%)', flexDirection: 'column-reverse' };
      default:
        return { ...baseStyle, top: 0, right: 0 };
    }
  };

  if (alerts.length === 0) return null;

  return createPortal(
    <div style={getPositionStyle()}>
      {alerts.map(alert => (
        <div key={alert.id} style={{ pointerEvents: 'auto' }}>
          <Alert {...alert} onClose={onClose} />
        </div>
      ))}
    </div>,
    document.body
  );
};

// 알림 관리 훅
export const useAlert = () => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (alertProps) => {
    const id = alertProps.id || Date.now() + Math.random();
    const alert = { ...alertProps, id };
    
    setAlerts(prev => [...prev, alert]);
    return id;
  };

  const closeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const clearAll = () => {
    setAlerts([]);
  };

  // 편의 메서드들
  const success = (message, options = {}) => 
    showAlert({ type: 'success', message, ...options });
  
  const error = (message, options = {}) => 
    showAlert({ type: 'error', message, ...options });
  
  const warning = (message, options = {}) => 
    showAlert({ type: 'warning', message, ...options });
  
  const info = (message, options = {}) => 
    showAlert({ type: 'info', message, ...options });

  return {
    alerts,
    showAlert,
    closeAlert,
    clearAll,
    success,
    error,
    warning,
    info
  };
};

// 글로벌 알림 프로바이더 (옵션)
export const AlertProvider = ({ children, position = "top-right" }) => {
  const { alerts, closeAlert } = useAlert();

  return (
    <>
      {children}
      <AlertContainer 
        position={position}
        alerts={alerts}
        onClose={closeAlert}
      />
    </>
  );
};

// Toast alias (일반적인 이름)
export const Toast = Alert;
export const useToast = useAlert;

// AlertContainer export 추가
export { AlertContainer };

export default Alert;