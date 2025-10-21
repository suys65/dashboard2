import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';
import logo from '../assets/logo.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 구글 로그인 제거됨

  // 학교 포탈 로그인 처리
  const handlePortalLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!studentId || !password) {
      alert('학번과 비밀번호를 입력해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.post('/v1/auth/login', {
        studentId: studentId,
        password: password
      });

      if (response.data.status === 200) {
        // 로그인 성공! 인증 상태 업데이트 후 대시보드로 이동
        login(studentId); // 학번을 전달
        navigate('/');
      } else {
        alert(response.data.message || '로그인에 실패했습니다.');
      }
    } catch (error: any) {
      // 로그인 실패 처리
      const errorMessage = error.response?.data?.message || '로그인에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="login-left-content">
            <img src={logo} alt="인천대학교 로고" className="login-logo" />
            <h1 className="login-welcome">환영합니다</h1>
            <p className="login-subtitle">학사행정 대시보드</p>
            <div className="login-decoration">
              <div className="decoration-circle decoration-circle-1"></div>
              <div className="decoration-circle decoration-circle-2"></div>
              <div className="decoration-circle decoration-circle-3"></div>
            </div>
          </div>
        </div>
        <div className="login-right">
          <h2 className="login-title">로그인</h2>
          
          {/* 단일 로그인 폼 */}

          {/* 학교 포탈 로그인 폼 */}
          <form onSubmit={handlePortalLogin}>
            <div className="form-row">
              <label htmlFor="studentId" className="sr-only">학번/사번</label>
              <input
                id="studentId"
                type="text"
                inputMode="numeric"
                placeholder="학번/사번을 입력해주세요."
                value={studentId}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, '');
                  setStudentId(onlyDigits);
                }}
                className="input"
                disabled={isLoading}
              />
            </div>
            <div className="form-row">
              <label htmlFor="password" className="sr-only">비밀번호</label>
              <input
                id="password"
                type="password"
                inputMode="text"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={(e) => {
                  // 한글 자모 및 완성형만 제거, 나머지(영문/숫자/특수문자)는 허용
                  const withoutKorean = e.target.value.replace(/[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]/g, '');
                  setPassword(withoutKorean);
                }}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                className="input"
                disabled={isLoading}
              />
            </div>
            <button 
              type="submit" 
              className="primary-btn"
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default LoginPage;


