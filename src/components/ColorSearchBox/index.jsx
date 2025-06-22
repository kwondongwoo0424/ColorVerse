import { useState, useEffect } from "react";
import * as S from "./style";
import { rgbToHex, rgbNumsToHex } from "../../utils/translateColorType";
import { getRandomHex } from "../../utils/getRamdomHex";

const ColorSearchBox = ({ color, setColor }) => {
  const [inputValue, setInputValue] = useState(color || "#fefae0");

  // 외부 color가 바뀌면 input도 같이 반영
  useEffect(() => {
    setInputValue(color);
  }, [color]);

  const onRandomBtnClick = () => {
    const randomHex = getRandomHex();
    setColor(randomHex);
    console.log("랜덤 색상:", randomHex);
  };

  const handleColorPickerChange = (e) => {
    const value = e.target.value;
    setColor(value);
  };

  const handleHexChange = (e) => {
    setInputValue(e.target.value);
  };

  const onColorSubmit = (e) => {
    e.preventDefault();
    const val = inputValue.trim();

    const hexRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
    const rgbRegex = /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/;
    const numsRegex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;

    if (hexRegex.test(val)) {
      setColor(val.toLowerCase());
      console.log("HEX 색상 입력:", val);
    } else if (rgbRegex.test(val)) {
      const hex = rgbToHex(val);
      if (hex) {
        setColor(hex);
        console.log("RGB 색상 입력(HEX 변환):", hex);
      } else {
        alert("RGB 값이 올바르지 않습니다.");
      }
    } else if (numsRegex.test(val)) {
      const hex = rgbNumsToHex(val);
      if (hex) {
        setColor(hex);
        console.log("숫자 RGB 입력(HEX 변환):", hex);
      } else {
        alert("RGB 숫자 값이 올바르지 않습니다.");
      }
    } else {
      alert("유효한 색상 형식이 아닙니다!");
    }
  };

  return (
    <S.SearchColorBox>
      <form onSubmit={onColorSubmit}>
        <input type="color" value={color} onChange={handleColorPickerChange} />
        <input
          type="text"
          placeholder="#FFFFFF 또는 rgb(255, 255, 255) 또는 217,217,217"
          value={inputValue}
          onChange={handleHexChange}
          pattern="^(#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})|rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)|(\d{1,3},\s*\d{1,3},\s*\d{1,3}))$"
          title="HEX (#RGB 또는 #RRGGBB), RGB 함수형식, 또는 콤마로 구분된 숫자(예: 217,217,217) 입력 가능"
          required
        />
        <button type="button" onClick={onRandomBtnClick}>
          Random
        </button>
      </form>
    </S.SearchColorBox>
  );
};

export default ColorSearchBox;
