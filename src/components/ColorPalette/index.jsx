import * as S from "./style";
import { recommendColors } from "../../utils/recommendColors";
import { hexToRgb } from "../../utils/translateColorType";

const ColorPaltte = ({ color }) => {
  const hexCodes = recommendColors(hexToRgb(color));

  return (
    <S.ColorPaletteContainer>
      <S.ColorPaletteBox>asdkjasdhasud</S.ColorPaletteBox>
      {hexCodes.map((color, index) => {
        return (
          <div key={index} style={{ backgroundColor: color}}>
            {color}
          </div>
        );
      })}
    </S.ColorPaletteContainer>
  );
};

export default ColorPaltte;