import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 구글 로그인 처리
  const handleGoogleLogin = () => {
    const googleAuthUrl = 'https://inunity-server.squidjiny.com/oauth2/authorization/google';
    const popup = window.open(
      googleAuthUrl,
      '_blank',
      'width=500,height=600,scrollbars=yes,resizable=yes'
    );

    // 팝업이 닫혔는지 확인하는 로직 (선택사항)
    if (popup) {
      const checkClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkClosed);
          // 팝업이 닫혔을 때의 처리 (필요시)
        }
      }, 1000);
    }
  };

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
        <div className="login-left" />
        <div className="login-right">
          <h2 className="login-title">로그인</h2>
          
          {/* 구글 로그인 버튼 */}
          <div style={{ marginBottom: '30px' }}>
            <button 
              type="button" 
              onClick={handleGoogleLogin}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#4285f4',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#3367d6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#4285f4';
              }}
            >
              <span></span>
              구글로 로그인 (학과 이메일)
            </button>
          </div>

          {/* 구분선 */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '30px',
            color: '#666'
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
            <span style={{ padding: '0 15px', fontSize: '14px' }}>또는</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
          </div>

          {/* 학교 포탈 로그인 폼 */}
          <form onSubmit={handlePortalLogin}>
            <div className="form-row">
              <label htmlFor="studentId" className="sr-only">학번</label>
              <input
                id="studentId"
                type="text"
                placeholder="학번을 입력해주세요."
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="input"
                disabled={isLoading}
              />
            </div>
            <div className="form-row">
              <label htmlFor="password" className="sr-only">비밀번호</label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              {isLoading ? '로그인 중...' : '학교 포탈 로그인'}
            </button>
          </form>
          
          <div className="login-links">
            <button className="link-btn" type="button">아이디 찾기</button>
            <span className="divider" />
            <button className="link-btn" type="button">비밀번호 찾기</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;


