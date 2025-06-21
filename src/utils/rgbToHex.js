export const rgbToHex = (rgb) => {
  const result = rgb.match(/\d+/g);
  if (!result || result.length < 3) return null;
  const [r, g, b] = result.map(Number);
  if ([r, g, b].some((v) => v < 0 || v > 255 || isNaN(v))) return null;
  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toLowerCase()
  );
};