import React, { useState, forwardRef } from "react";
import { getTheme } from "../utils/theme";

const TextInput = forwardRef(
  (
    {
      type = "text",
      placeholder = "",
      value,
      onChange,
      onFocus,
      onBlur,
      disabled = false,
      error = false,
      errorMessage = "",
      label = "",
      size = "md",
      variant = "default",
      className = "",
      style = {},
      multiline = false,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    // Get current theme (you can make this dynamic with context later)
    const currentTheme = getTheme("dark");

    // Base input styles
    const baseStyles = {
      width: "100%",
      border: error
        ? `1px solid ${currentTheme.colors?.error || "#ef4444"}`
        : isFocused
        ? currentTheme.ui?.input?.focus ||
          `1px solid ${currentTheme.colors?.purple || "#8b5cf6"}`
        : currentTheme.ui?.input?.border || "1px solid #2a2a3e",
      borderRadius: currentTheme.borderRadius?.lg || "12px",
      background: currentTheme.ui?.input?.background || "rgba(30, 30, 46, 0.8)",
      color: currentTheme.text?.primary || "#ffffff",
      fontSize: currentTheme.fontSize?.md || "16px",
      fontFamily: "inherit",
      outline: "none",
      transition: currentTheme.transitions?.normal || "0.3s ease-in-out",
      backdropFilter: "blur(10px)",
      boxShadow: isFocused
        ? currentTheme.ui?.glowShadow || "0 0 20px rgba(255, 107, 157, 0.3)"
        : error
        ? "0 0 15px rgba(239, 68, 68, 0.3)"
        : "none",
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "text",
      resize: multiline ? "vertical" : "none",
      ...style,
    };

    // Size variants
    const sizeStyles = {
      sm: {
        padding: `${currentTheme.spacing?.sm || "8px"} ${
          currentTheme.spacing?.md || "16px"
        }`,
        fontSize: currentTheme.fontSize?.sm || "14px",
        minHeight: multiline ? "auto" : "36px",
      },
      md: {
        padding: `${currentTheme.spacing?.md || "16px"} ${
          currentTheme.spacing?.lg || "24px"
        }`,
        fontSize: currentTheme.fontSize?.md || "16px",
        minHeight: multiline ? "auto" : "48px",
      },
      lg: {
        padding: `${currentTheme.spacing?.lg || "24px"} ${
          currentTheme.spacing?.xl || "32px"
        }`,
        fontSize: currentTheme.fontSize?.lg || "18px",
        minHeight: multiline ? "auto" : "56px",
      },
    };

    // Variant styles
    const variantStyles = {
      default: {},
      gaming: {
        background: `linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)`,
        border: `1px solid ${currentTheme.colors?.purple || "#8b5cf6"}`,
        boxShadow: "0 4px 15px rgba(139, 92, 246, 0.2)",
      },
      neon: {
        background: `rgba(0, 255, 255, 0.05)`,
        border: `1px solid ${currentTheme.colors?.neon || "#00ffff"}`,
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
      },
    };

    // Combine all styles
    const inputStyles = {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    // Label styles
    const labelStyles = {
      display: "block",
      marginBottom: currentTheme.spacing?.sm || "8px",
      color: currentTheme.text?.secondary || "#b8b8d1",
      fontSize: currentTheme.fontSize?.sm || "14px",
      fontWeight: currentTheme.fontWeight?.medium || 500,
    };

    // Error message styles
    const errorStyles = {
      marginTop: currentTheme.spacing?.xs || "4px",
      color: currentTheme.colors?.error || "#ef4444",
      fontSize: currentTheme.fontSize?.xs || "12px",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    };

    // Placeholder styles
    const placeholderColor = currentTheme.ui?.input?.placeholder || "#6b6b8a";

    const handleFocus = (e) => {
      setIsFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur = (e) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    const InputComponent = multiline ? "textarea" : "input";

    return (
      <div className={`gaming-input-container ${className}`}>
        {label && <label style={labelStyles}>{label}</label>}

        <InputComponent
          ref={ref}
          type={multiline ? undefined : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          rows={multiline ? rows : undefined}
          style={{
            ...inputStyles,
            "::placeholder": {
              color: placeholderColor,
              opacity: 0.7,
            },
          }}
          {...props}
        />

        {error && errorMessage && (
          <div style={errorStyles}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            {errorMessage}
          </div>
        )}

        {/* Add custom CSS for placeholder styling */}
        <style jsx>{`
          .gaming-input-container input::placeholder,
          .gaming-input-container textarea::placeholder {
            color: ${placeholderColor};
            opacity: 0.7;
          }

          .gaming-input-container input:focus::placeholder,
          .gaming-input-container textarea:focus::placeholder {
            opacity: 0.5;
          }

          /* Custom scrollbar for textarea */
          .gaming-input-container textarea::-webkit-scrollbar {
            width: 8px;
          }

          .gaming-input-container textarea::-webkit-scrollbar-track {
            background: rgba(42, 42, 62, 0.3);
            border-radius: 4px;
          }

          .gaming-input-container textarea::-webkit-scrollbar-thumb {
            background: ${currentTheme.colors?.purple || "#8b5cf6"};
            border-radius: 4px;
          }

          .gaming-input-container textarea::-webkit-scrollbar-thumb:hover {
            background: ${currentTheme.colors?.pink || "#ff6b9d"};
          }
        `}</style>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
