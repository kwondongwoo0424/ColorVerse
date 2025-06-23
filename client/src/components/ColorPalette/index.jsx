import * as S from "./style";

const ColorPaltte = ({ color }) => {
  console.log("ColorPaltte",color)
  const hexCodes = ["#606C38", "#283618", "#FEFAE0", "#DDA15E"]


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
