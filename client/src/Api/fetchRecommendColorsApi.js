export const fetchRecommendColorsApi = async (selectedColor) => {
  const response = await fetch("http://localhost:5050/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `${selectedColor} 이거랑 어울리는 색깔 4가지로 된 조합 2개 추천해줘 쓸대 없는말 하지말고 [[추천색1,2,3,4,],[1,2,3,4]] 이런식으로 반환해줘`,
    }),
  });

  
  const data = await response.json();
  if (data.result) {
    return data.result;
  } else {
    return "오류: 응답이 없습니다.";
  }
};
