import { toPng } from "html-to-image";
import download from "downloadjs";

export const exportAsImage = (exportRef) => {
  if (!exportRef.current) return;

  toPng(exportRef.current, { 
    skipFonts: true
  })
    .then((dataUrl) => {
      download(dataUrl, "color-system.png");
    })
    .catch((err) => {
      console.error("이미지 저장 실패:", err);
    });
};
