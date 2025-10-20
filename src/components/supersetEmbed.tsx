// src/components/SupersetEmbed.tsx
import { useAuth } from '../contexts/AuthContext';

const SupersetEmbed = () => {
  const { isAuthenticated } = useAuth();
  
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

  return (
    <div className="dashboard-start">
      <iframe
        src="http://10.80.86.78:8088/superset/dashboard/8a738685-a518-4ae5-9d89-994473c01de2/?standalone=1"
        width="100%"
        height="100%"
        frameBorder={0}
        title="Superset Dashboard"
        style={{
          minHeight: '400px'
        }}
      />
    </div>
  );
};

export default SupersetEmbed;
