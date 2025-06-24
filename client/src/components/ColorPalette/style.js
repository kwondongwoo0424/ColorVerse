import styled from "styled-components";

export const ColorPaletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 95%;
  margin: 0 auto;
  padding: 20px;
`;

export const ColorPaletteBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 calc((100% - 48px) / 3);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
`;

export const ColorBox = styled.div`
  width: 115px;
  height: 130px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    width: 200px;
    z-index: 10;
  }
`;

export const ColorCode = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  ${ColorBox}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
`;
