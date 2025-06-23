import * as S from "./style";
import { recommendColors } from "../../utils/recommendColors";
import { hexToRgb } from "../../utils/translateColorType";

const ColorPaltte = ({ color }) => {
  const hexCodes = recommendColors(hexToRgb(color));

  return (
    <S.ColorPaletteContainer>
      <S.ColorPaletteBox>
        {hexCodes.map((color, index) => {
          return (
            <S.ColorBox key={index} style={{ backgroundColor: color }}>
              {color}
            </S.ColorBox>
          );
        })}
      </S.ColorPaletteBox>
    </S.ColorPaletteContainer>
  );
};

export default ColorPaltte;
