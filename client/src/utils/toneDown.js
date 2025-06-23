export const toneDown = (hsl, toneFactor=0.6, saturationFactor=0.5) => {
  return {
    h: hsl.h,
    s: hsl.s * saturationFactor,
    l: hsl.l * toneFactor,
  };
}