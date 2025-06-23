import { toHex, hslToRgb, rgbToHsl } from "./translateColorType"

export const recommendColors = (baseRgb) => {
  const baseHsl = rgbToHsl(baseRgb.r, baseRgb.g, baseRgb.b);

  const palette = [];
  
  palette.push(toHex(baseRgb));

  // 부드러운 hue 변형 (5개로 늘림)
  const offsets = [20, -30, 40, -15];

  for (let offset of offsets) {
    const newHue = (baseHsl.h + offset + 360) % 360;
    const newHsl = {
      h: newHue,
      s: baseHsl.s * 0.9,
      l: baseHsl.l * 0.95
    };
    palette.push(toHex(hslToRgb(newHsl.h, newHsl.s, newHsl.l)));
  }

  return palette;
}
