import styled from "styled-components";

// 전체 컨테이너
export const container = styled.div`
  padding: 40px 0 60px 0;
  font-family: 'Inter', 'Pretendard', sans-serif;
  font-size: 15px;
  width: 100vw;
  min-height: 100%;
`;

// 큰 타이틀
export const title = styled.h2`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
  color: #2d2d2f;
  text-align: center;
  letter-spacing: -1px;
`;

// 라벨 그룹
export const labelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

// 컬러 그리드
export const colorGrid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

// 컬러 박스
export const colorBlock = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 1.5px solid #e5e7eb;
  background: rgba(255,255,255,0.6);
`;

// export 버튼
export const exportButton = styled.button`
  padding: 10px 18px;
  background: linear-gradient(90deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  margin-left: 14px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(115,103,240,0.14);
  transition: 0.16s, transform 0.12s;

  &:hover {
    background: linear-gradient(90deg, #4338ca 0%, #6366f1 100%);
    transform: translateY(-1px) scale(1.03);
  }
`;

// 컬러 시스템 박스 (카드)
export const ColorSystemBox = styled.div`
  background: rgba(255,255,255,0.60);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 38px 0 rgba(79,70,229,0.085), 0 2px 6px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 360px;
  border-radius: 18px;
  margin: 0 auto 32px auto;
  padding: 44px 24px 38px 24px;
  border: 1.5px solid #e0e7ff;
  position: relative;
`;