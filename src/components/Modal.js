import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../ThemeProvider';
import Icon from './Icon';

const Modal = ({
  isOpen = false,
  onClose,
  onConfirm,
  title = "알림",
  message = "",
  type = "confirm", // "alert" (확인만), "confirm" (확인+취소)
  confirmText = "확인",
  cancelText = "취소",
  variant = "default", // "default", "error", "warning", "success"
  size = "md", // "sm", "md", "lg"
  children,
  closeOnBackdrop = true,
  showCloseButton = true
}) => {
  const themeContext = useTheme();
  const theme = themeContext || {
    colors: {
      primary: {
        background: "rgb(8, 9, 10)",
        surface: "rgba(10, 10, 10, 0.8)",
        text: "rgb(247, 248, 248)",
        textSecondary: "rgba(255, 255, 255, 0.7)",
        border: "rgba(255, 255, 255, 0.08)",
        accent: "rgb(94, 106, 210)"
      },
      semantic: {
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444"
      }
    },
    typography: {
      fontSize: {
        sm: "13px",
        base: "16px", 
        xl: "24px"
      },
      fontWeight: {
        medium: 510,
        semibold: 538
      }
    }
  };
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  // 모달 열릴 때 포커스 관리
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement;
      if (modalRef.current) {
        modalRef.current.focus();
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (previousFocus.current && typeof previousFocus.current.focus === 'function') {
        try {
          previousFocus.current.focus();
        } catch (e) {
          console.warn('포커스 복원 중 오류:', e);
        }
      }
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && closeOnBackdrop) {
      onClose?.();
    }
  };

  const handleConfirm = () => {
    try {
      if (onConfirm) {
        onConfirm();
      }
    } catch (error) {
      console.error('Modal onConfirm 오류:', error);
    } finally {
      if (onClose) {
        onClose();
      }
    }
  };

  const handleCancel = () => {
    try {
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error('Modal onClose 오류:', error);
    }
  };

  if (!isOpen) return null;

  // 크기별 스타일
  const sizeStyles = {
    sm: { maxWidth: '400px', padding: '24px' },
    md: { maxWidth: '500px', padding: '32px' },
    lg: { maxWidth: '600px', padding: '40px' }
  };

  // 타입별 아이콘과 색상
  const variantConfig = {
    default: { icon: null, color: theme.colors.primary.text },
    error: { icon: 'x-circle', color: theme.colors.semantic.error },
    warning: { icon: 'alert-triangle', color: theme.colors.semantic.warning },
    success: { icon: 'check-circle', color: theme.colors.semantic.success }
  };

  const config = variantConfig[variant];

  const modalContent = (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 1000,
        animation: 'modalFadeIn 0.2s ease-out'
      }}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        tabIndex="-1"
        style={{
          backgroundColor: theme.colors.primary.surface,
          borderRadius: '12px',
          border: `1px solid ${theme.colors.primary.border}`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          width: '100%',
          ...sizeStyles[size],
          position: 'relative',
          animation: 'modalSlideIn 0.2s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        {showCloseButton && (
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'none',
              border: 'none',
              color: theme.colors.primary.textSecondary,
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '6px',
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
            <Icon name="x" size={20} />
          </button>
        )}

        {/* 헤더 */}
        <div style={{ marginBottom: message || children ? '24px' : '32px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            marginBottom: '8px'
          }}>
            {config.icon && (
              <Icon 
                name={config.icon} 
                size={24} 
                color={config.color}
              />
            )}
            <h2 style={{
              fontSize: theme.typography.fontSize.xl,
              fontWeight: theme.typography.fontWeight.semibold,
              color: theme.colors.primary.text,
              margin: 0
            }}>
              {title}
            </h2>
          </div>
        </div>

        {/* 콘텐츠 */}
        {(message || children) && (
          <div style={{ marginBottom: '32px' }}>
            {message && (
              <p style={{
                fontSize: theme.typography.fontSize.base,
                color: theme.colors.primary.textSecondary,
                lineHeight: '1.6',
                margin: 0
              }}>
                {message}
              </p>
            )}
            {children}
          </div>
        )}

        {/* 액션 버튼 */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
          {type === 'confirm' && (
            <button
              onClick={handleCancel}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: `1px solid ${theme.colors.primary.border}`,
                backgroundColor: theme.colors.primary.background,
                color: theme.colors.primary.text,
                fontSize: theme.typography.fontSize.sm,
                fontWeight: theme.typography.fontWeight.medium,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '80px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.colors.primary.surface;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme.colors.primary.background;
              }}
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={handleConfirm}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: variant === 'error' ? theme.colors.semantic.error : theme.colors.primary.accent,
              color: theme.colors.primary.text,
              fontSize: theme.typography.fontSize.sm,
              fontWeight: theme.typography.fontWeight.medium,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minWidth: '80px'
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.9';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;