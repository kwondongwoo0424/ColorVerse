import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 60px);
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 90%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  font-family: "Pretendard", sans-serif;
  margin: 0;
`;

export const TextContent = styled.p`
  width: 80%;
  text-align: center;
`;
