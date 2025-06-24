import { useState, useEffect, useCallback } from "react";
import * as S from "./style";
import { getRandomHex } from "../../utils/getRamdomHex";
import { fetchRecommendColorsApi } from "../../Api/fetchRecommendColorsApi";
import { fetchRecommendSecondaryColorApi } from "../../Api/fetchRecommendSecondaryColor";

function rgbToHex(rgb) {
  // "rgb(255, 0, 0)" 또는 "255,0,0" 형태 지원
  let result = rgb.match(/\d{1,3}/g);
  if (!result || result.length < 3) return "#000000";
  return (
    "#" +
    result
      .slice(0, 3)
      .map((x) => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

const ColorSearchBox = ({
  color,
  setColor,
  setRecommendedColor,
  setPrimaryColor,
  setSecondaryColor,
}) => {
  const [pickerColor, setPickerColor] = useState(color || "#fefae0");
  const [inputValue, setInputValue] = useState(color || "#fefae0");
  const [isLoading, setIsLoading] = useState(false);

  // 외부 color가 바뀌면 둘 다 반영
  useEffect(() => {
    if (color) {
      setPickerColor(color);
      setInputValue(color);
    }
  }, [color]);

  // 색상 유효성 검사
  const validateColor = useCallback((colorValue) => {
    const hexRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
    const rgbRegex = /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/;
    const numsRegex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;
    return (
      hexRegex.test(colorValue) ||
      rgbRegex.test(colorValue) ||
      numsRegex.test(colorValue)
    );
  }, []);

  // 추천 색상 요청
  const requestRecommendedColors = useCallback(
    async (colorValue) => {
      if (!colorValue.trim() || isLoading) return;

      if (!validateColor(colorValue)) {
        alert("유효한 색상 형식이 아닙니다");
        return;
      }

      setIsLoading(true);

      try {
        const recommendedColor = await fetchRecommendColorsApi(colorValue);
        const recommendedSecondaryColor = await fetchRecommendSecondaryColorApi;
        setRecommendedColor(recommendedColor);
        setPrimaryColor(colorValue);
        setSecondaryColor(recommendedSecondaryColor);
      } catch (err) {
        console.error("Error fetching from server:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [setRecommendedColor, validateColor, isLoading]
  );

  // 색상 적용 및 추천 요청 (모든 상태 동기화)
  const applyColor = useCallback(
    (newColor) => {
      setColor(newColor);
      setPickerColor(newColor);
      setInputValue(newColor);
      requestRecommendedColors(newColor);
    },
    [setColor, requestRecommendedColors]
  );

  // 랜덤 버튼 클릭
  const handleRandomClick = useCallback(() => {
    const randomHex = getRandomHex();
    applyColor(randomHex);
  }, [applyColor]);

  // 컬러 피커 변경 - 실시간으로 텍스트 입력도 같이 변경
  const handleColorPickerChange = useCallback((e) => {
    const newColor = e.target.value;
    setPickerColor(newColor);
    setInputValue(newColor); // 텍스트 입력도 실시간 업데이트
  }, []);

  // 컬러 피커 닫힐 때 - 최종 색상 적용
  const handleColorPickerBlur = useCallback(() => {
    if (pickerColor !== color) {
      applyColor(pickerColor);
    }
  }, [pickerColor, color, applyColor]);

  // 텍스트 입력 변경 - 컬러피커는 건드리지 않음
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
    // 컬러피커는 이전 색상 유지
  }, []);

  // 엔터 키 또는 폼 제출 - 텍스트 입력 기준으로 모든 것 동기화
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (inputValue !== color) {
        applyColor(inputValue);
      }
    },
    [inputValue, color, applyColor]
  );

  const getPickerValue = () => {
    if (/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(inputValue)) {
      return inputValue;
    }
    if (
      /^rgb\(/.test(inputValue) ||
      /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/.test(inputValue)
    ) {
      return rgbToHex(inputValue);
    }
    return "#000000"; // fallback
  };

  return (
    <S.Wrap>
      <S.SearchColorBox>
        <form onSubmit={handleSubmit}>
          <S.ColorPicker
            type="color"
            value={getPickerValue()}
            onChange={handleColorPickerChange}
            onBlur={handleColorPickerBlur}
            disabled={isLoading}
          />
          <S.ColorInputBox
            type="text"
            placeholder="#FFFFFF or rgb(255, 255, 255) or 217,217,217"
            value={inputValue}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
          <S.RandomBtn
            type="button"
            onClick={handleRandomClick}
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "Random"}
          </S.RandomBtn>
        </form>
      </S.SearchColorBox>
    </S.Wrap>
  );
};

export default ColorSearchBox;
