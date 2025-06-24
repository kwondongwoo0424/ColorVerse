export const fetchRecommendColorsApi = async (selectedColor) => {
  const response = await fetch("http://localhost:5050/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `${selectedColor}처럼 특정 HEX 색상을 기준으로,
	•	그 색과 어울리는 HEX 색상 4가지를 추천하고,
	•	${selectedColor}가 세번째 자리에 포함된 5가지 색 조합 6세트를 추천해줘, ${selectedColor} 이 색이 각 배열의 3번째 자리에 있어야해.
	•	조합 중 하나는 ${selectedColor} 색상을 포함한 그라데이션 구조여야 해,
  •	조합은 전부 서로 다른 분위기를 가져야 하고,
	•	출력 형식은 아래와 같아야 해:
    [["#", "#", "${selectedColor}", "#", "#"], ["#", "#", "${selectedColor}", "#", "#"]]
    쓸데없는 말은 하지 말고, 결과만 출력해, 불필요한 문자 절대 넣지마.
    다시 한번 말한다. 쓸데없는 말 절대 하지말고 오직 결과만 출력해
  `,
    }),
  });

  const data = await response.json();
  if (data.result) {
    return JSON.parse(data.result);
  } else {
    return "오류: 응답이 없습니다.";
  }
};
