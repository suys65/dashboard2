# INU Dashboard Frontend

인천대학교 대시보드 프론트엔드 애플리케이션 (React + TypeScript + Vite)

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 🔧 Superset 대시보드 URL 설정

### 방법 1: Config 파일 수정 (권장)
`src/config/superset.ts` 파일에서 베이스 URL을 변경하세요:

```typescript
export const SUPERSET_BASE_URL = 'https://새로운-도메인.com';
```

### 방법 2: 환경 변수 사용
`.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
VITE_SUPERSET_BASE_URL=https://새로운-도메인.com
```

### 대시보드 경로 추가
`src/config/superset.ts`의 `DASHBOARD_PATHS` 객체에 새로운 대시보드 경로를 추가하세요:

```typescript
export const DASHBOARD_PATHS = {
  MAIN: '/superset/dashboard/p/...',
  ADMISSION_RECRUIT_MAJOR: '/superset/dashboard/p/...',
  // 새로운 경로 추가
  YOUR_NEW_DASHBOARD: '/superset/dashboard/p/...',
};
```

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
