export const fetchRecommendSecondaryColorApi = async (selectedColor) => {
  const response = await fetch("http://localhost:5050/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `${selectedColor} 이 색이 primary color인데 이 색과 어울리는 Secondary color 추천해줘, HEX값으로 출력해.
      쓸데없는 말은 하지 말고, HEX값만 출력해, 불필요한 문자 절대 넣지마.
      다시 한번 말한다. 쓸데없는 말 절대 하지말고 오직 결과만 출력해`,
    }),
  });

  const data = await response.json();
  if (data.result) {
    return data.result;
  } else {
    return "오류: 응답이 없습니다.";
  }
};
