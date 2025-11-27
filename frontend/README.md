# Frontend Project

React + Vite + Tailwind CSS로 구성된 프론트엔드 프로젝트입니다.

## 기술 스택

- **React 19.2.0** - UI 라이브러리
- **Vite 7.2.4** - 빌드 도구 및 개발 서버
- **Tailwind CSS 4.1.17** - CSS 프레임워크
- **ESLint** - 코드 품질 관리

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:5173/`에서 실행됩니다.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

### 린트 검사

```bash
npm run lint
```

## 프로젝트 구조

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Tailwind CSS 설정

- `tailwind.config.js`: Tailwind 설정 파일
- `postcss.config.js`: PostCSS 설정 파일
- `src/index.css`: Tailwind 지시문이 포함된 메인 CSS 파일

## 개발 가이드

1. 컴포넌트는 `src/components/` 폴더에 생성
2. Tailwind CSS 클래스를 사용하여 스타일링
3. ESLint 규칙을 준수하여 코드 작성