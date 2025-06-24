import React, { useRef, useEffect, useState } from "react";
import * as S from "./style";
import { exportAsImage } from "../../utils/exportAsImage";
import generateOverlayScale from "../../utils/generateOverlayScale";
import RenderOverlayBar from "./RenderOverlayBar";

const staticColors = {
  white: "#ffffff",
  black: "#000000",
  grayLight: "#e0e0e0",
  gray: "#9e9e9e",
  grayDark: "#424242",
};

const ColorSystem = ({ primary, secondary }) => {
  const [resolvedSecondary, setResolvedSecondary] = useState(secondary);

  useEffect(() => {
    if (secondary instanceof Promise) {
      secondary.then(setResolvedSecondary);
    } else {
      setResolvedSecondary(secondary);
    }
  }, [secondary]);

  const exportRef = useRef();

  const primaryScale = generateOverlayScale(primary);
  const secondaryScale = generateOverlayScale(resolvedSecondary);

  const exportToJsonFile = () => {
    const data = {
      primary,
      secondary: resolvedSecondary,
      gradients: {
        primaryScale,
        secondaryScale,
      },
      staticColors,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "color-system.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <S.container>
      <S.title>🎨 Color System Generator</S.title>

      <S.ColorSystemBox ref={exportRef}>
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginBottom: "18px"
        }}>
          <S.exportButton onClick={exportToJsonFile}>
            💾 Export JSON
          </S.exportButton>
          <S.exportButton onClick={() => exportAsImage(exportRef)}>
            🖼 Export as Image
          </S.exportButton>
        </div>
        <RenderOverlayBar
          colors={primaryScale}
          title={"Primary Overlay Gradient"}
        />
        <RenderOverlayBar
          colors={secondaryScale}
          title={"Secondary Overlay Gradient"}
        />

        <h3>🧱 Static Colors</h3>
        <S.colorGrid>
          {Object.values(staticColors).map((color, i) => (
            <S.colorBlock
              key={i}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </S.colorGrid>
      </S.ColorSystemBox>
    </S.container>
  );
};

export default ColorSystem;