// Gaming-style theme with dark and light modes
// Features pink/blue gradients and cyberpunk aesthetics

export const theme = {
  // Dark mode (primary gaming theme)
  dark: {
    // Background colors
    background: {
      primary: '#0a0a0f',
      secondary: '#1a1a2e',
      tertiary: '#16213e',
      card: '#1e1e2e',
      modal: 'rgba(10, 10, 15, 0.95)',
      gradient: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)'
    },
    
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#b8b8d1',
      tertiary: '#8b8ba7',
      accent: '#ff6b9d',
      muted: '#6b6b8a'
    },
    
    // Gaming-style accent colors
    colors: {
      neon: '#00ffff',
      pink: '#ff6b9d',
      purple: '#8b5cf6',
      blue: '#3b82f6',
      cyan: '#06b6d4',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    },
    
    // Gradient buttons and elements
    gradients: {
      primary: 'linear-gradient(135deg, #ff6b9d 0%, #8b5cf6 50%, #3b82f6 100%)',
      secondary: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ff6b9d 100%)',
      accent: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
      neon: 'linear-gradient(135deg, #00ffff 0%, #ff6b9d 100%)',
      gaming: 'linear-gradient(135deg, #ff0080 0%, #7928ca 50%, #0070f3 100%)'
    },
    
    // Button styles
    button: {
      primary: {
        background: 'linear-gradient(135deg, #ff6b9d 0%, #8b5cf6 50%, #3b82f6 100%)',
        hover: 'linear-gradient(135deg, #ff8fb3 0%, #a78bfa 50%, #60a5fa 100%)',
        text: '#ffffff',
        shadow: '0 4px 15px rgba(255, 107, 157, 0.4)'
      },
      secondary: {
        background: 'rgba(139, 92, 246, 0.1)',
        border: '1px solid #8b5cf6',
        hover: 'rgba(139, 92, 246, 0.2)',
        text: '#8b5cf6',
        shadow: '0 2px 10px rgba(139, 92, 246, 0.3)'
      },
      ghost: {
        background: 'transparent',
        hover: 'rgba(255, 107, 157, 0.1)',
        text: '#ff6b9d',
        border: '1px solid rgba(255, 107, 157, 0.3)'
      }
    },
    
    // Gaming UI elements
    ui: {
      border: '#2a2a3e',
      borderAccent: '#8b5cf6',
      shadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      glowShadow: '0 0 20px rgba(255, 107, 157, 0.3)',
      input: {
        background: 'rgba(30, 30, 46, 0.8)',
        border: '1px solid #2a2a3e',
        focus: '1px solid #8b5cf6',
        placeholder: '#6b6b8a'
      }
    }
  },
  
  // Light mode (alternative theme)
  light: {
    // Background colors
    background: {
      primary: '#f8fafc',
      secondary: '#f1f5f9',
      tertiary: '#e2e8f0',
      card: '#ffffff',
      modal: 'rgba(248, 250, 252, 0.95)',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)'
    },
    
    // Text colors
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      tertiary: '#64748b',
      accent: '#e11d48',
      muted: '#94a3b8'
    },
    
    // Gaming-style accent colors (adjusted for light mode)
    colors: {
      neon: '#0891b2',
      pink: '#e11d48',
      purple: '#7c3aed',
      blue: '#2563eb',
      cyan: '#0891b2',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626'
    },
    
    // Gradient buttons and elements
    gradients: {
      primary: 'linear-gradient(135deg, #e11d48 0%, #7c3aed 50%, #2563eb 100%)',
      secondary: 'linear-gradient(135deg, #0891b2 0%, #7c3aed 50%, #e11d48 100%)',
      accent: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
      neon: 'linear-gradient(135deg, #0891b2 0%, #e11d48 100%)',
      gaming: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 50%, #2563eb 100%)'
    },
    
    // Button styles
    button: {
      primary: {
        background: 'linear-gradient(135deg, #e11d48 0%, #7c3aed 50%, #2563eb 100%)',
        hover: 'linear-gradient(135deg, #f43f5e 0%, #8b5cf6 50%, #3b82f6 100%)',
        text: '#ffffff',
        shadow: '0 4px 15px rgba(225, 29, 72, 0.4)'
      },
      secondary: {
        background: 'rgba(124, 58, 237, 0.1)',
        border: '1px solid #7c3aed',
        hover: 'rgba(124, 58, 237, 0.2)',
        text: '#7c3aed',
        shadow: '0 2px 10px rgba(124, 58, 237, 0.3)'
      },
      ghost: {
        background: 'transparent',
        hover: 'rgba(225, 29, 72, 0.1)',
        text: '#e11d48',
        border: '1px solid rgba(225, 29, 72, 0.3)'
      }
    },
    
    // Gaming UI elements
    ui: {
      border: '#e2e8f0',
      borderAccent: '#7c3aed',
      shadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      glowShadow: '0 0 20px rgba(225, 29, 72, 0.2)',
      input: {
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        focus: '1px solid #7c3aed',
        placeholder: '#94a3b8'
      }
    }
  },
  
  // Common theme properties
  common: {
    borderRadius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px'
    },
    
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px'
    },
    
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    
    transitions: {
      fast: '0.15s ease-in-out',
      normal: '0.3s ease-in-out',
      slow: '0.5s ease-in-out'
    },
    
    zIndex: {
      dropdown: 1000,
      modal: 1050,
      tooltip: 1100
    }
  }
};

// Theme context helper functions
export const getTheme = (mode = 'dark') => {
  return {
    ...theme[mode],
    ...theme.common
  };
};

// CSS-in-JS helper for styled-components or emotion
export const createGlobalStyles = (currentTheme) => `
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: ${currentTheme.background.primary};
    color: ${currentTheme.text.primary};
    transition: all ${currentTheme.transitions.normal};
  }
  
  .gaming-button {
    background: ${currentTheme.button.primary.background};
    color: ${currentTheme.button.primary.text};
    border: none;
    border-radius: ${currentTheme.borderRadius.lg};
    padding: ${currentTheme.spacing.md} ${currentTheme.spacing.lg};
    font-weight: ${currentTheme.fontWeight.semibold};
    cursor: pointer;
    transition: all ${currentTheme.transitions.normal};
    box-shadow: ${currentTheme.button.primary.shadow};
  }
  
  .gaming-button:hover {
    background: ${currentTheme.button.primary.hover};
    transform: translateY(-2px);
    box-shadow: ${currentTheme.ui.glowShadow};
  }
  
  .gaming-card {
    background: ${currentTheme.background.card};
    border: 1px solid ${currentTheme.ui.border};
    border-radius: ${currentTheme.borderRadius.xl};
    box-shadow: ${currentTheme.ui.shadow};
    transition: all ${currentTheme.transitions.normal};
  }
  
  .gaming-card:hover {
    border-color: ${currentTheme.ui.borderAccent};
    box-shadow: ${currentTheme.ui.glowShadow};
  }
`;

export default theme;