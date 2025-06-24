
import * as S from "./style";

const ColorPalette = ({ recommendedColor }) => {
  return (
    <S.ColorPaletteContainer>
      {recommendedColor.map((arr, index) => (
        <S.ColorPaletteBox key={index}>
          {arr.map((color, idx) => (
            <S.ColorBox key={idx} style={{ backgroundColor: color }}>
              <S.ColorCode>{color}</S.ColorCode>
            </S.ColorBox>
          ))}
        </S.ColorPaletteBox>
      ))}
    </S.ColorPaletteContainer>
  );
};

export default ColorPalette;