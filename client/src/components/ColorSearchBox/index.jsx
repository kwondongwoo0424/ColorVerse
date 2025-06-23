import { useState, useEffect } from "react";
import * as S from "./style";
import { rgbToHex, rgbNumsToHex } from "../../utils/translateColorType";
import { getRandomHex } from "../../utils/getRamdomHex";
import { fetchRecommendColorsApi } from "../../Api/fetchRecommendColorsApi";

const ColorSearchBox = ({ color, setColor }) => {
  const [inputValue, setInputValue] = useState(color || "#fefae0");
  const [tempColor, setTempColor] = useState(color || "#fefae0");
  const [_isPickerActive, setIsPickerActive] = useState(false);
  const [outputValue, setOutputValue] = useState("");

  // 외부 color가 바뀌면 input도 같이 반영
  useEffect(() => {
    setInputValue(color);
    setTempColor(color);
  }, [color]);

  //랜덤 버튼 클릭 (랜덤 색상 생성)
  const onRandomBtnClick = () => {
    const randomHex = getRandomHex();
    setColor(randomHex);
    onColorSubmit
    console.log("랜덤 색상:", randomHex);
  };

  // 컬러 선택 중 (계속 바뀔 때는 임시 저장만)
  const handleColorPickerChange = (e) => {
    setTempColor(e.target.value);
  };

  // 컬러픽커가 닫힐 때
  const handleColorPickerBlur = () => {
    setIsPickerActive(false);
    if (tempColor !== color) {
      setColor(tempColor);
      onColorSubmit
      console.log("최종 색상 선택됨:", tempColor);
    }
  };

  const handleColorPickerFocus = () => {
    setIsPickerActive(true);
  };

  //입력한 색상이 바뀔때
  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const onColorSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return
    console.log(12342532123)
    fetchRecommendColorsApi(inputValue);
    const hexRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
    const rgbRegex = /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/;
    const numsRegex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;

    if (hexRegex.test(inputValue)) {
      setColor(inputValue.toLowerCase());
      console.log("HEX 색상 입력:", inputValue);
    } else if (rgbRegex.test(inputValue)) {
      const hex = rgbToHex(inputValue);
      if (hex) {
        setColor(hex);
        console.log("RGB 색상 입력(HEX 변환):", hex);
      } else {
        alert("RGB 값이 올바르지 않습니다.");
      }
    } else if (numsRegex.test(inputValue)) {
      const hex = rgbNumsToHex(inputValue);
      if (hex) {
        setColor(hex);
        console.log("숫자 RGB 입력(HEX 변환):", hex);
      } else {
        alert("RGB 숫자 값이 올바르지 않습니다.");
      }
    } else {
      alert("유효한 색상 형식이 아닙니다");
    }

    try {
      console.log(123)
      setOutputValue(fetchRecommendColorsApi(color));
    } catch (e) {
      console.error("Error fetching from server:", e);
      setOutputValue("오류: 서버 요청 실패");
    }
  };

  return (
    <S.SearchColorBox>
      <form onSubmit={onColorSubmit}>
        <input
          type="color"
          value={tempColor}
          onChange={handleColorPickerChange}
          onFocus={handleColorPickerFocus}
          onBlur={handleColorPickerBlur}
        />
        <input
          type="text"
          placeholder="#FFFFFF 또는 rgb(255, 255, 255) 또는 217,217,217"
          value={inputValue}
          onChange={handleInputValueChange}
          pattern="^(#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})|rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)|(\d{1,3},\s*\d{1,3},\s*\d{1,3}))$"
          title="HEX (#RGB 또는 #RRGGBB), RGB 함수형식, 또는 콤마로 구분된 숫자(예: 217,217,217) 입력 가능"
          required
        />
        <button type="button" onClick={onRandomBtnClick}>
          Random
        </button>
      </form>
      <div>{outputValue}</div>
    </S.SearchColorBox>
  );
};

export default ColorSearchBox;
