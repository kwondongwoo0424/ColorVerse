import { rgbToHex, hslToRgb, rgbToHsl } from "./translateColorType"
import { toneDown } from "./toneDown"

export const recommendColors = (baseRgb) => {
  const { r, g, b } = baseRgb;
  const baseHsl = rgbToHsl(r, g, b);

  // 4가지 톤 조합
  const paletteHsl = [
    toneDown(baseHsl, 0.4, 0.7), // 어둡고 채도 낮음 - 짙은 그린/브라운 느낌
    toneDown({ h: (baseHsl.h + 30) % 360, s: baseHsl.s, l: baseHsl.l }, 0.5, 0.6), // 조금 다른 톤
    toneDown({ h: (baseHsl.h + 50) % 360, s: baseHsl.s, l: baseHsl.l }, 0.7, 0.5),
    toneDown({ h: (baseHsl.h + 20) % 360, s: baseHsl.s * 1.2, l: baseHsl.l * 0.8 }, 0.6, 0.6),
  ];

  return paletteHsl.map(hsl => rgbToHex(hslToRgb(hsl.h, hsl.s, hsl.l)));
}
