import styled from "styled-components";

export const Wrap = styled.div`
  display:flex;
  width: 100%;
  justify-content: end;
`

export const SearchColorBox = styled.div`
  width: 100%;
  max-width: 500px;
  
  form {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    transition: all 0.2s ease;
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    &:focus-within {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      border-color: #3b82f6;
    }
  }
`;

export const ColorPicker = styled.input`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #9ca3af;
    transform: scale(1.05);
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  /* 컬러피커 기본 스타일 제거 */
  &::-webkit-color-swatch-wrapper {
    padding: 0;
    border: none;
    border-radius: 6px;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 6px;
  }
  
  &::-moz-color-swatch {
    border: none;
    border-radius: 6px;
  }
`;

export const ColorInputBox = styled.input`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: #f9fafb;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: #9ca3af;
    font-size: 13px;
  }
  
  &:hover {
    border-color: #9ca3af;
    background: #ffffff;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f3f4f6;
  }
`;

export const RandomBtn = styled.button`
  display: inline-flex;
  height: 48px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  background: #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  min-width: 80px;
  
  &:hover {
    border-color: #3b82f6;
    background: #f8fafc;
    color: #3b82f6;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    color: #9ca3af;
    
    &:hover {
      border-color: #e5e7eb;
      background: #ffffff;
      color: #9ca3af;
    }
  }
`;