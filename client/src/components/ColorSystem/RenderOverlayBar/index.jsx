import * as S from "./style";

const renderOverlayBar = ({ colors, title }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <S.sectionTitle>{title}</S.sectionTitle>
      <S.colorGrid>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <S.colorBlock style={{ backgroundColor: "#ffffff" }} title="#ffffff" />
          <p>#ffffff</p>
        </div>
        {colors.map((color, i) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={`white-${i}`}>
            <S.colorBlock
              style={{ backgroundColor: color.overWhite }}
              title={`onWhite α${(i + 1) * 0.2}`}
            />
            <p>{color.overWhite}</p>
          </div>
        ))}
        {colors
          .slice(0, 4)
          .reverse()
          .map((color, i) => (
            <div style={{ display: "flex", flexDirection: "column" }} key={`black-${i}`}>
              <S.colorBlock
                style={{ backgroundColor: color.overBlack }}
                title={`onBlack α${(i + 1) * 0.2}`}
              />
              <p>{color.overBlack}</p>
            </div>
          ))}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <S.colorBlock style={{ backgroundColor: "#000000" }} title="#000000" />
          <p>#000000</p>
        </div>
      </S.colorGrid>
    </div>
  );
};

export default renderOverlayBar;