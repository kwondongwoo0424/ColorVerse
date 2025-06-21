import * as S from "./style";
import Header from "../../components/Header";
import ColorSearchBox from "../../components/ColorSearchBox";
import ColorPaltte from "../../components/ColorPalette"

const Home = () => {

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
          <ColorSearchBox />
          <ColorPaltte />
        </S.Contents>
      </S.Wrap>
    </>
  );
};

export default Home;
