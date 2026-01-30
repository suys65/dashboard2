import axios from 'axios';

const SERVER_URL = 'https://dashboard.inu.ac.kr/superset';

// axios 인스턴스 생성
export const api = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true, // 쿠키 자동 전송
  timeout: 10000,
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 모든 요청에 withCredentials 추가
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 인증 실패 시 로그인 페이지로 리다이렉트
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
