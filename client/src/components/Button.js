import React from 'react';
import { getTheme } from '../utils/theme';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  onClick,
  className = '',
  style = {},
  ...props 
}) => {
  // Get current theme (you can make this dynamic with context later)
  const currentTheme = getTheme('dark');
  
  // Base button styles
  const baseStyles = {
    border: 'none',
    borderRadius: currentTheme.borderRadius?.lg || '12px',
    fontWeight: currentTheme.fontWeight?.semibold || 600,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: currentTheme.transitions?.normal || '0.3s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'inherit',
    textDecoration: 'none',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    opacity: disabled ? 0.6 : 1,
    transform: 'translateY(0)',
    ...style
  };
  
  // Size variants
  const sizeStyles = {
    sm: {
      padding: `${currentTheme.spacing?.sm || '8px'} ${currentTheme.spacing?.md || '16px'}`,
      fontSize: currentTheme.fontSize?.sm || '14px',
      minHeight: '32px'
    },
    md: {
      padding: `${currentTheme.spacing?.md || '16px'} ${currentTheme.spacing?.lg || '24px'}`,
      fontSize: currentTheme.fontSize?.md || '16px',
      minHeight: '44px'
    },
    lg: {
      padding: `${currentTheme.spacing?.lg || '24px'} ${currentTheme.spacing?.xl || '32px'}`,
      fontSize: currentTheme.fontSize?.lg || '18px',
      minHeight: '52px'
    }
  };
  
  // Variant styles
  const variantStyles = {
    primary: {
      background: currentTheme.button?.primary?.background || currentTheme.gradients?.primary,
      color: currentTheme.button?.primary?.text || '#ffffff',
      boxShadow: currentTheme.button?.primary?.shadow || '0 4px 15px rgba(255, 107, 157, 0.4)'
    },
    secondary: {
      background: currentTheme.button?.secondary?.background || 'rgba(139, 92, 246, 0.1)',
      color: currentTheme.button?.secondary?.text || '#8b5cf6',
      border: currentTheme.button?.secondary?.border || '1px solid #8b5cf6',
      boxShadow: currentTheme.button?.secondary?.shadow || '0 2px 10px rgba(139, 92, 246, 0.3)'
    },
    ghost: {
      background: currentTheme.button?.ghost?.background || 'transparent',
      color: currentTheme.button?.ghost?.text || '#ff6b9d',
      border: currentTheme.button?.ghost?.border || '1px solid rgba(255, 107, 157, 0.3)'
    },
    danger: {
      background: `linear-gradient(135deg, ${currentTheme.colors?.error || '#ef4444'} 0%, #dc2626 100%)`,
      color: '#ffffff',
      boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)'
    },
    success: {
      background: `linear-gradient(135deg, ${currentTheme.colors?.success || '#10b981'} 0%, #059669 100%)`,
      color: '#ffffff',
      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
    }
  };
  
  // Hover styles
  const hoverStyles = {
    primary: {
      background: currentTheme.button?.primary?.hover || 'linear-gradient(135deg, #ff8fb3 0%, #a78bfa 50%, #60a5fa 100%)',
      transform: 'translateY(-2px)',
      boxShadow: currentTheme.ui?.glowShadow || '0 0 20px rgba(255, 107, 157, 0.3)'
    },
    secondary: {
      background: currentTheme.button?.secondary?.hover || 'rgba(139, 92, 246, 0.2)',
      transform: 'translateY(-1px)'
    },
    ghost: {
      background: currentTheme.button?.ghost?.hover || 'rgba(255, 107, 157, 0.1)',
      transform: 'translateY(-1px)'
    },
    danger: {
      background: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
      transform: 'translateY(-2px)'
    },
    success: {
      background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
      transform: 'translateY(-2px)'
    }
  };
  
  // Combine all styles
  const buttonStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant]
  };
  
  // Handle mouse events for hover effects
  const handleMouseEnter = (e) => {
    if (!disabled && !loading) {
      Object.assign(e.target.style, hoverStyles[variant]);
    }
  };
  
  const handleMouseLeave = (e) => {
    if (!disabled && !loading) {
      Object.assign(e.target.style, {
        background: variantStyles[variant].background,
        transform: 'translateY(0)',
        boxShadow: variantStyles[variant].boxShadow || 'none'
      });
    }
  };
  
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    
    // Add click animation
    e.target.style.transform = 'translateY(1px)';
    setTimeout(() => {
      if (e.target) {
        e.target.style.transform = 'translateY(0)';
      }
    }, 150);
    
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <button
      className={`gaming-button ${className}`}
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div 
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid transparent',
            borderTop: '2px solid currentColor',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        />
      )}
      {children}
      
      {/* Add CSS keyframes for loading spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};

export default Button;