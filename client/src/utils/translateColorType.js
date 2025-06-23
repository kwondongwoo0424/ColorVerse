export const rgbToHsv = (r, g, b) =>{
  r /= 255; g /= 255; b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, v = max;
  let d = max - min;

  s = max === 0 ? 0 : d / max;

  if (max === min) h = 0;
  else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }

  return { h, s, v };
}


export const rgbToHsl = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  let d = max - min;

  if (d === 0) h = s = 0; // 무채색
  else {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h /= 6;
  }

  return { h: h * 360, s, l };
}



export const rgbToHex = (rgb) => {
  const result = [rgb.r, rgb.g, rgb.b];
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



export const hsvToRgb = (h, s, v) => {
  let c = v * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = v - c;
  let r, g, b;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}



export const hexToRgb = (hex) => {
  const cleanedHex = hex.replace('#', '');
  const fullHex = cleanedHex.length === 3
    ? cleanedHex.split('').map(c => c + c).join('')
    : cleanedHex;

  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  return { r, g, b };
};





export const hslToRgb = (h, s, l) => {
  h /= 360;

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  }

  let r, g, b;

  if (s === 0) r = g = b = l; // 무채색
  else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}


export const toHex = ({ r, g, b }) => {
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
}