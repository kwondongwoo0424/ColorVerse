import * as S from "./style";
import {useState} from "react"
import Header from "../../components/Header";
import ColorSearchBox from "../../components/ColorSearchBox";
import ColorPaltte from "../../components/ColorPalette";

const Home = () => {
  const [color, setColor] = useState('#fefae0');

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
      </S.Wrap>
    </>
  );
};

export default Home;
