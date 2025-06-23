import * as S from "./style";
import { useState } from "react";
import Header from "../../components/Header";
import ColorSearchBox from "../../components/ColorSearchBox";
import ColorPaltte from "../../components/ColorPalette";

const Home = () => {
  const [color, setColor] = useState("#fefae0");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const response = await fetch("http://localhost:5050/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: `${inputValue} 이거랑 어울리는 색깔 4가지로 된 조합 2개 추천해줘 쓸대 없는말 하지말고 [[추천색1,2,3,4,],[1,2,3,4]] 이런식으로 반환해줘`}),
      });

      const data = await response.json();
      if (data.result) {
        setOutputValue(data.result);
      } else {
        setOutputValue("오류: 응답이 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching from server:", error);
      setOutputValue("오류: 서버 요청 실패");
    }

    setInputValue("");
  };

  return (
    <>
      <Header />
      <S.Wrap>
        <S.Contents>
          <S.TitleBox>
            <S.Title>Make your Color Palettes</S.Title>
            <S.TextContent>
              Get inspired by thousands of beautiful
              <br /> color schemes and make something cool!
            </S.TextContent>
          </S.TitleBox>
          <ColorSearchBox color={color} setColor={setColor} />
          <ColorPaltte color={color} setColor={setColor} />
        </S.Contents>

        {/* Chat 영역 */}
        <div className="chat-container">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="색상에 대한 질문을 입력해보세요"
            />
            <button type="submit">Send</button>
          </form>
          <div className="chat-output">{outputValue}</div>
        </div>
      </S.Wrap>
    </>
  );
};

export default Home;
