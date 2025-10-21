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

  const overrideSrc = (import.meta as any).env?.VITE_SUPERSET_IFRAME_SRC || '';
  const defaultSrc = 'https://configure-nebraska-handed-rent.trycloudflare.com/superset/dashboard/p/dbDZ2Qe29yQ/?standalone=true';
  const iframeSrc = overrideSrc || defaultSrc;

  const isHttpsPage = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const isHttpTarget = iframeSrc.startsWith('http://');

  if (isHttpsPage && isHttpTarget) {
    return (
      <div className="dashboard-start" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        gap: '12px',
        textAlign: 'center',
        color: '#444'
      }}>
        <div style={{ fontSize: '16px' }}>
          보안 정책에 따라 혼합 콘텐츠가 차단되어 대시보드를 표시할 수 없습니다.
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          HTTPS 페이지에서는 iframe 대상도 HTTPS여야 합니다.
        </div>
        <a
          href={iframeSrc}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            padding: '10px 16px',
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          새 창에서 열기
        </a>
        <div style={{
          marginTop: '8px',
          fontSize: '12px',
          color: '#888',
          wordBreak: 'break-all',
          maxWidth: '720px'
        }}>
          {iframeSrc}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-start">
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        frameBorder={0}
        title="Superset Dashboard"
        referrerPolicy="no-referrer"
        loading="lazy"
        style={{
          minHeight: '400px'
        }}
      />
    </div>
  );
};

export default SupersetEmbed;
