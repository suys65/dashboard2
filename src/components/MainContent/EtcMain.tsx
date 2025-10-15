import React from 'react';

type Props = {
  selected: 'satisfaction' | 'staff';
  onSelect: (key: 'satisfaction' | 'staff') => void;
};

const supersetLinks: Record<string, string> = {
  satisfaction: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
  staff: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
};

const EtcMain: React.FC<Props> = ({ selected }) => (
  <section className="main-content">
    <div className="breadcrumb" id="breadcrumb">
      Home &gt; 기타
    </div>
    <div id="title" className="title">기타</div>

    <div className="dashboard-box" id="dashboard-box">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        fontSize: '16px',
        color: '#666',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          <h3>대시보드 임베딩 준비 중</h3>
          <p>백엔드에서 게스트 토큰 API를 구현하면</p>
          <p>Superset Embedded SDK로 대시보드가 표시됩니다.</p>
        </div>
      </div>
    </div>
  </section>
);

export default EtcMain;


