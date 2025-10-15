import React from 'react';

type Props = {
  selected: 'total' | 'major' | 'general';
  onSelect: (key: 'total' | 'major' | 'general') => void;
};

const tableauLinks: Record<string, string> = {
  total: 'about:blank',
  major: 'about:blank',
  general: 'about:blank',
};

const GradeMain: React.FC<Props> = ({ selected }) => (
  <section className="main-content">
    <div className="breadcrumb" id="breadcrumb">
      Home &gt; 성적
    </div>
    <div id="title" className="title">성적</div>

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

export default GradeMain;


