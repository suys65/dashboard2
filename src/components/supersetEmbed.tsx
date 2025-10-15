// src/components/SupersetEmbed.tsx
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect, useRef } from 'react';
import { embedDashboard } from '@superset-ui/embedded-sdk';
import { fetchGuestToken, getSupersetConfig } from '../utils/supersetApi';

const SupersetEmbed = () => {
  const { isAuthenticated } = useAuth();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const embedRef = useRef<HTMLDivElement>(null);
  
  // 인증된 사용자만 Superset에 접근
  if (!isAuthenticated) {
    return (
      <div className="dashboard-start" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        fontSize: '18px',
        color: '#666'
      }}>
        로그인이 필요합니다.
      </div>
    );
  }

  useEffect(() => {
    const mountDashboard = async () => {
      if (!embedRef.current) return;
      
      try {
        setIsLoading(true);
        setHasError(false);
        
        const config = getSupersetConfig();
        
        await embedDashboard({
          id: "kQE0ebr2KZm", // 대시보드 UUID
          supersetDomain: config.supersetDomain,
          mountPoint: embedRef.current,
          fetchGuestToken: () => fetchGuestToken("kQE0ebr2KZm"),
          dashboardUiConfig: config.dashboardUiConfig,
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error('Superset embed error:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    mountDashboard();
  }, []);

  // 로딩 중 표시
  if (isLoading) {
    return (
      <div className="dashboard-start" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        fontSize: '16px',
        color: '#666'
      }}>
        대시보드를 로딩 중입니다...
      </div>
    );
  }

  // Superset 로드 실패 시 대체 메시지
  if (hasError) {
    return (
      <div className="dashboard-start" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        fontSize: '16px',
        color: '#666',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h3>대시보드 로드 중 문제가 발생했습니다</h3>
          <p>Superset 서버에 접근할 수 없습니다.</p>
          <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>
            백엔드에서 게스트 토큰 API를 구현해주세요.
          </p>
        </div>
        <button 
          onClick={() => {
            setHasError(false);
            setIsLoading(true);
            window.location.reload();
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-start">
      <div 
        ref={embedRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px'
        }}
      />
    </div>
  );
};

export default SupersetEmbed;
