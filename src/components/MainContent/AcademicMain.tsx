import React from 'react';

type Props = {
  selected: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter';
  onSelect: (key: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter') => void;
};

const tableauLinks: Record<string, string> = {
  leave: 'about:blank',
  dropout: 'about:blank',
  transfer: 'about:blank',
  double: 'about:blank',
  inter: 'about:blank',
};

const AcademicMain: React.FC<Props> = ({ selected }) => (
  <section className="main-content">
    <div className="breadcrumb" id="breadcrumb">
      Home &gt; 학적
    </div>
    <div id="title" className="title">학적</div>

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

export default AcademicMain;


