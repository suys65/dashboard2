import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 구글 로그인 성공 시 대시보드로 이동
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
        backgroundColor: '#f9f9f9'
      }}>
        <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>✅ 로그인 성공!</h2>
        <p style={{ marginBottom: '10px' }}>구글 로그인이 완료되었습니다.</p>
        <p style={{ fontSize: '14px', color: '#666' }}>잠시 후 대시보드로 이동합니다...</p>
        <div style={{ 
          width: '100%', 
          height: '4px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '2px',
          marginTop: '20px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#4CAF50',
            animation: 'progress 2s ease-in-out'
          }} />
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default GoogleSuccessPage;
