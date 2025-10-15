import React from 'react';

type Props = {
  selected: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter';
  onSelect: (key: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter') => void;
};

const supersetLinks: Record<string, string> = {
  leave: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
  dropout: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
  transfer: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
  double: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
  inter: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
};

const AcademicMain: React.FC<Props> = ({ selected }) => (
  <section className="main-content">
    <div className="breadcrumb" id="breadcrumb">
      Home &gt; 학적
    </div>
    <div id="title" className="title">학적</div>

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

export default AcademicMain;


