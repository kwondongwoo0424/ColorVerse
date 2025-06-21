export const rgbNumsToHex = (str) => {
  const nums = str.split(",").map((n) => Number(n.trim()));
  if (nums.length !== 3 || nums.some((v) => isNaN(v) || v < 0 || v > 255))
    return null;

  return (
    "#" +
    nums
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toLowerCase()
  );
};