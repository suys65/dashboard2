// Superset API 유틸리티 함수들

export interface GuestTokenRequest {
  dashboardId: string;
  userId?: string;
}

export interface GuestTokenResponse {
  token: string;
  expiresAt: number;
}

/**
 * 백엔드에서 게스트 토큰을 가져오는 함수
 * @param dashboardId 대시보드 UUID
 * @returns 게스트 토큰
 */
export const fetchGuestToken = async (dashboardId: string): Promise<string> => {
  try {
    const response = await fetch('/api/superset/guest-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dashboardId,
        userId: 'current-user' // 현재 로그인한 사용자 ID
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: GuestTokenResponse = await response.json();
    return data.token;
  } catch (error) {
    console.error('Failed to fetch guest token:', error);
    throw error;
  }
};

/**
 * Superset 대시보드 임베딩을 위한 설정
 */
export const getSupersetConfig = () => {
  return {
    supersetDomain: "http://10.80.86.78:8088",
    dashboardUiConfig: {
      hideTitle: true,
      filters: {
        expanded: false
      }
    }
  };
};
