# 🎨 ColorVerse

**AI 기반 색상 팔레트 생성 및 디자인 시스템 구축 도구**

ColorVerse는 사용자가 선택한 색상을 기반으로 AI가 조화로운 색상 팔레트를 추천하고, 전문적인 디자인 시스템을 자동으로 생성해주는 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🤖 **AI 기반 색상 추천**: OpenAI GPT-3.5를 활용한 지능형 색상 조합 추천
- 🎯 **다양한 입력 방식**: HEX, RGB, 숫자 형식 지원
- 🌈 **실시간 색상 시스템**: 오버레이 그라데이션 및 접근성 보장 색상 생성
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- 💾 **다양한 출력 형식**: JSON 데이터, PNG 이미지로 결과 저장
- 🎲 **랜덤 색상 생성**: 영감을 위한 무작위 색상 추천

## 🛠 기술 스택

### Frontend

- **React 19.1.0** - 최신 React 기능 활용
- **Vite** - 빠른 개발 서버 및 빌드 도구
- **Styled Components** - CSS-in-JS 스타일링
- **React Router DOM** - SPA 라우팅

### Backend

- **Node.js** - 서버 런타임
- **Express.js** - RESTful API 서버
- **OpenAI API** - AI 기반 색상 추천
- **CORS** - 크로스 오리진 리소스 공유

### 주요 라이브러리

- **tinycolor2** - 색상 조작 및 변환
- **html-to-image** - DOM을 이미지로 변환
- **downloadjs** - 파일 다운로드 기능

## 🚀 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/kwondongwoo0424/ColorVerse.git
cd ColorVerse
```

### 2. 의존성 설치

```bash
# 루트 디렉토리에서
npm install

# 클라이언트 디렉토리에서
cd client
npm install

# 서버 디렉토리에서
cd ../server
npm install
```

### 3. 환경 변수 설정

서버 디렉토리에 `.env` 파일을 생성하고 OpenAI API 키를 설정하세요:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. 애플리케이션 실행

```bash
# 루트 디렉토리에서 (프론트엔드 + 백엔드 동시 실행)
npm run dev

# 또는 개별 실행
npm run client  # 프론트엔드만
npm run server  # 백엔드만
```

- **프론트엔드**: http://localhost:5173
- **백엔드**: http://localhost:5050

## 📖 사용 방법

### 1. 색상 입력

- **컬러 피커**: 시각적으로 색상 선택
- **텍스트 입력**: HEX (#FFFFFF), RGB (rgb(255,255,255)), 숫자 (255,255,255) 형식 지원
- **랜덤 버튼**: 무작위 색상 생성

### 2. AI 색상 추천

색상을 입력하면 AI가 자동으로:

- 선택한 색상과 조화로운 4가지 색상 추천
- 선택한 색상이 포함된 6가지 5색 조합 생성
- 다양한 분위기의 색상 팔레트 제공

### 3. 색상 시스템 생성

- **Primary/Secondary 색상**: 기본 색상과 보조 색상 설정
- **오버레이 그라데이션**: 흰색/검은색 배경에서의 가독성 보장
- **정적 색상**: 흰색, 검은색, 회색 계열 제공

### 4. 결과 저장

- **JSON 형식**: 색상 시스템 데이터를 JSON 파일로 저장
- **PNG 이미지**: 색상 시스템을 이미지로 저장

## 🏗 프로젝트 구조

```
ColorVerse/
├── client/                 # React 프론트엔드
│   ├── src/
│   │   ├── components/     # React 컴포넌트
│   │   ├── Api/           # API 호출 함수
│   │   ├── utils/         # 유틸리티 함수
│   │   └── page/          # 페이지 컴포넌트
│   └── package.json
├── server/                # Node.js 백엔드
│   ├── server.js         # Express 서버
│   └── package.json
└── package.json          # 루트 패키지 설정
```

## 🔧 주요 알고리즘

### 색상 오버레이 스케일 생성

- tinycolor2 라이브러리를 활용한 색상 혼합
- 20%씩 단계적 그라데이션 생성
- 흰색/검은색 배경에서의 접근성 보장

### AI 색상 추천 시스템

- GPT-3.5-turbo 모델 활용
- 구조화된 프롬프트 엔지니어링
- 일관된 JSON 형식 출력

### 실시간 색상 동기화

- 다중 입력 방식 간 실시간 동기화
- React useCallback을 통한 성능 최적화
- 이벤트 타이밍 제어