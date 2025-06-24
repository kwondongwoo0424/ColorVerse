import * as S from "./style";
import { useState } from "react";
import Header from "../../components/Header";
import ColorSearchBox from "../../components/ColorSearchBox";
import ColorPaltte from "../../components/ColorPalette";
import ColorSystem from "../../components/ColorSystem";

const Home = () => {
  const [color, setColor] = useState("#fefae0");
  const [recommendedColor, setRecommendedColor] = useState([
    ["#60958e", "#5f5d49", "#138ebb", "#bd8e72", "#9ec18e"],
    ["#13406e", "#ea724b", "#138ebb", "#3cbf67", "#bf80b0"],
    ["#7d138e", "#e1b98c", "#138ebb", "#6e9819", "#7b72bf"],
    ["#8e1379", "#80c3bf", "#138ebb", "#cbbe3c", "#8e597b"],
    ["#8e1335", "#82bf93", "#138ebb", "#bfba3c", "#8e6a7b"],
    ["#8e2613", "#a8bf80", "#138ebb", "#bb3cc1", "#8e937b"],
  ]);
  const [primaryColor, setPrimaryColor] = useState("#fefae0");
  const [secondaryColor, setSecondaryColor] = useState("#a3b18a");

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
          <ColorSearchBox
            color={color}
            setColor={setColor}
            setRecommendedColor={setRecommendedColor}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
          <ColorPaltte recommendedColor={recommendedColor} />
          <ColorSystem primary={primaryColor} secondary={secondaryColor} />
        </S.Contents>
      </S.Wrap>
    </>
  );
};

export default Home;
