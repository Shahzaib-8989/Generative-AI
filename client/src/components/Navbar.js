import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex?.dropdown || 1000};
  background: ${({ theme }) => theme.background?.card || '#1e1e2e'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.ui?.border || '#2a2a3e'};
  padding: ${({ theme }) => theme.spacing?.md || '16px'} ${({ theme }) => theme.spacing?.xl || '32px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ${({ theme }) => theme.transitions?.normal || '0.3s ease-in-out'};
  
  &:hover {
    border-bottom-color: ${({ theme }) => theme.ui?.borderAccent || '#8b5cf6'};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.md || '16px'};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions?.normal || '0.3s ease-in-out'};
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.gradients?.primary || 'linear-gradient(135deg, #ff6b9d 0%, #8b5cf6 50%, #3b82f6 100%)'};
  border-radius: ${({ theme }) => theme.borderRadius?.lg || '12px'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  box-shadow: ${({ theme }) => theme.ui?.glowShadow || '0 0 20px rgba(255, 107, 157, 0.3)'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSize?.xl || '20px'};
  font-weight: ${({ theme }) => theme.fontWeight?.bold || 700};
  background: ${({ theme }) => theme.gradients?.primary || 'linear-gradient(135deg, #ff6b9d 0%, #8b5cf6 50%, #3b82f6 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.md || '16px'};
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCreateClick = () => {
    navigate('/post');
  };

  return (
    <NavbarContainer>
      <Logo onClick={handleLogoClick}>
        <LogoIcon>
          🎨
        </LogoIcon>
        <LogoText>AI Generator</LogoText>
      </Logo>
      
      <NavActions>
        <Button 
          variant="primary" 
          size="md" 
          onClick={handleCreateClick}
        >
          ✨ Create
        </Button>
      </NavActions>
    </NavbarContainer>
  );
};

export default Navbar;
