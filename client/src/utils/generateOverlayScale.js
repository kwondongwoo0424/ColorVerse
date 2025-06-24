import tinycolor from "tinycolor2";

const generateOverlayScale = (color) => {
  const scale = [];

  for (let i = 0; i < 5; i++) {
    const percent = (i + 1) * 20; // 20%, 40%, 60%, 80%, 100%
    const whiteOverlay = tinycolor.mix("#ffffff", color, percent).toHexString(); // 진해짐
    const blackOverlay = tinycolor.mix("#000000", color, percent).toHexString();

    scale.push({
      overWhite: whiteOverlay,
      overBlack: blackOverlay,
    });
  }

  return scale;
};

export default generateOverlayScale;