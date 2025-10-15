import React from 'react';

type Props = {
  selected: 'satisfaction' | 'staff';
  onSelect: (key: 'satisfaction' | 'staff') => void;
};

const tableauLinks: Record<string, string> = {
  satisfaction: 'about:blank',
  staff: 'about:blank',
};

const EtcMain: React.FC<Props> = ({ selected }) => (
  <section className="main-content">
    <div className="breadcrumb" id="breadcrumb">
      Home &gt; 기타
    </div>
    <div id="title" className="title">기타</div>

    <div className="dashboard-box" id="dashboard-box">
      <iframe
        src={tableauLinks[selected]}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        title="Tableau"
      />
    </div>
  </section>
);

export default EtcMain;


