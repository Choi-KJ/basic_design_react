import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../ThemeProvider';
import Icon from './Icon';

const Dropdown = ({
  options = [],
  value = null,
  onChange,
  placeholder = "선택하세요",
  disabled = false,
  size = "md", // "sm", "md", "lg"
  variant = "default", // "default", "outline", "ghost"
  error = false,
  searchable = false,
  multiple = false,
  clearable = false,
  loading = false,
  maxHeight = "200px",
  position = "bottom", // "bottom", "top"
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
        textMuted: "rgb(138, 143, 152)",
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

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValues, setSelectedValues] = useState(
    multiple ? (Array.isArray(value) ? value : []) : value
  );

  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // 검색 필터링
  const filteredOptions = searchable && searchTerm
    ? options.filter(option =>
        (typeof option === 'string' ? option : option.label || option.value || '')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : options;

  // 옵션 선택 핸들러
  const handleOptionSelect = (option) => {
    const optionValue = typeof option === 'string' ? option : option.value;
    
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      
      setSelectedValues(newValues);
      onChange?.(newValues);
    } else {
      setSelectedValues(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // 전체 선택 해제
  const handleClear = (e) => {
    e.stopPropagation();
    const newValue = multiple ? [] : null;
    setSelectedValues(newValue);
    onChange?.(newValue);
  };

  // 표시할 텍스트 생성
  const getDisplayText = () => {
    if (multiple && Array.isArray(selectedValues) && selectedValues.length > 0) {
      if (selectedValues.length === 1) {
        const option = options.find(opt => 
          (typeof opt === 'string' ? opt : opt.value) === selectedValues[0]
        );
        return typeof option === 'string' ? option : (option?.label || option?.value || '');
      }
      return `${selectedValues.length}개 선택됨`;
    }
    
    if (!multiple && selectedValues !== null && selectedValues !== undefined) {
      const option = options.find(opt => 
        (typeof opt === 'string' ? opt : opt.value) === selectedValues
      );
      return typeof option === 'string' ? option : (option?.label || option?.value || '');
    }
    
    return placeholder;
  };

  // 크기별 스타일
  const sizeStyles = {
    sm: {
      height: '32px',
      padding: '6px 12px',
      fontSize: theme.typography.fontSize.xs
    },
    md: {
      height: '40px', 
      padding: '10px 16px',
      fontSize: theme.typography.fontSize.sm
    },
    lg: {
      height: '48px',
      padding: '14px 20px',
      fontSize: theme.typography.fontSize.base
    }
  };

  // variant별 스타일
  const getVariantStyles = () => {
    const baseStyle = {
      backgroundColor: theme.colors.primary.background,
      border: `1px solid ${error ? theme.colors.semantic.error : theme.colors.primary.border}`,
      color: selectedValues ? theme.colors.primary.text : theme.colors.primary.textMuted
    };

    switch (variant) {
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent'
        };
      case 'ghost':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          border: '1px solid transparent'
        };
      default:
        return baseStyle;
    }
  };

  const triggerStyle = {
    ...sizeStyles[size],
    ...getVariantStyles(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.5 : 1,
    fontWeight: theme.typography.fontWeight.normal,
    ...style
  };

  const dropdownStyle = {
    position: 'absolute',
    top: position === 'bottom' ? '100%' : 'auto',
    bottom: position === 'top' ? '100%' : 'auto',
    left: 0,
    right: 0,
    marginTop: position === 'bottom' ? '4px' : '0',
    marginBottom: position === 'top' ? '4px' : '0',
    backgroundColor: theme.colors.primary.surface,
    border: `1px solid ${theme.colors.primary.border}`,
    borderRadius: '8px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    maxHeight: maxHeight,
    overflowY: 'auto',
    zIndex: 1000,
    animation: 'dropdownFadeIn 0.15s ease-out'
  };

  return (
    <div 
      ref={dropdownRef} 
      className={className}
      style={{ position: 'relative', ...style }}
    >
      {/* 트리거 버튼 */}
      <div
        style={triggerStyle}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.target.style.borderColor = theme.colors.primary.accent;
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.target.style.borderColor = error ? theme.colors.semantic.error : theme.colors.primary.border;
          }
        }}
      >
        <span style={{ 
          flex: 1, 
          textAlign: 'left',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {getDisplayText()}
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {clearable && selectedValues && (
            <button
              onClick={handleClear}
              style={{
                background: 'none',
                border: 'none',
                color: theme.colors.primary.textSecondary,
                cursor: 'pointer',
                padding: '2px',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.colors.primary.surface;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <Icon name="x" size={14} />
            </button>
          )}
          
          {loading ? (
            <div style={{
              width: '16px',
              height: '16px',
              border: `2px solid ${theme.colors.primary.border}`,
              borderTop: `2px solid ${theme.colors.primary.accent}`,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          ) : (
            <Icon 
              name={isOpen ? "chevron-up" : "chevron-down"} 
              size={16}
              color={theme.colors.primary.textSecondary}
            />
          )}
        </div>
      </div>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div style={dropdownStyle}>
          {/* 검색 입력 */}
          {searchable && (
            <div style={{ padding: '8px' }}>
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="검색..."
                autoFocus
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: theme.colors.primary.background,
                  border: `1px solid ${theme.colors.primary.border}`,
                  borderRadius: '6px',
                  color: theme.colors.primary.text,
                  fontSize: theme.typography.fontSize.sm,
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = theme.colors.primary.accent;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = theme.colors.primary.border;
                }}
              />
            </div>
          )}

          {/* 옵션 리스트 */}
          <div>
            {filteredOptions.length === 0 ? (
              <div style={{
                padding: '12px 16px',
                color: theme.colors.primary.textMuted,
                fontSize: theme.typography.fontSize.sm,
                textAlign: 'center'
              }}>
                {searchTerm ? '검색 결과가 없습니다' : '옵션이 없습니다'}
              </div>
            ) : (
              filteredOptions.map((option, index) => {
                const optionValue = typeof option === 'string' ? option : option.value;
                const optionLabel = typeof option === 'string' ? option : option.label || option.value;
                const isSelected = multiple 
                  ? selectedValues.includes(optionValue)
                  : selectedValues === optionValue;

                return (
                  <div
                    key={`${optionValue}-${index}`}
                    style={{
                      padding: '12px 16px',
                      cursor: 'pointer',
                      backgroundColor: isSelected ? theme.colors.primary.accent + '20' : 'transparent',
                      color: isSelected ? theme.colors.primary.accent : theme.colors.primary.text,
                      fontSize: theme.typography.fontSize.sm,
                      transition: 'all 0.15s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onClick={() => handleOptionSelect(option)}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.target.style.backgroundColor = theme.colors.primary.surface;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span>{optionLabel}</span>
                    {isSelected && multiple && (
                      <Icon name="check" size={16} color={theme.colors.primary.accent} />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Dropdown;