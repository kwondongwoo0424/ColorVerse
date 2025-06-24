import React from "react";
import * as S from "./style";

const ColorBar = ({ colors, title }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <S.sectionTitle>{title}</S.sectionTitle>
      <S.colorGrid>
        {colors.map((color, i) => (
          <S.colorBlock
            key={i}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </S.colorGrid>
    </div>
  );
};

export default ColorBar;