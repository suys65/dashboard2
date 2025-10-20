import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GoogleFailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // URL에서 에러 메시지 가져오기
    const errorParam = searchParams.get('error');
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
  }, [searchParams]);

  const handleRetry = () => {
    navigate('/login');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '40px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        maxWidth: '500px',
        width: '90%'
      }}>
        <h2 style={{ color: '#f44336', marginBottom: '20px' }}> 로그인 실패</h2>
        <p style={{ marginBottom: '20px' }}>구글 로그인에 실패했습니다.</p>
        
        {error && (
          <div style={{
            backgroundColor: '#ffebee',
            border: '1px solid #ffcdd2',
            borderRadius: '4px',
            padding: '15px',
            marginBottom: '20px',
            color: '#c62828'
          }}>
            <strong>오류 메시지:</strong><br />
            {error}
          </div>
        )}
        
        <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
          다시 시도하거나 다른 로그인 방법을 사용해주세요.
        </p>
        
        <button
          onClick={handleRetry}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1976D2';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2196F3';
          }}
        >
          다시 시도
        </button>
      </div>
    </div>
  );
};

export default GoogleFailPage;
