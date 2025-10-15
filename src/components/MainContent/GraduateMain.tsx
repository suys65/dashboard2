import React from 'react';

type Props = {
  selected: 'undergrad' | 'gradschool';
  onSelect: (key: 'undergrad' | 'gradschool') => void;
};

const tableauLinks: Record<string, string> = {
  undergrad: 'about:blank',
  gradschool: 'about:blank',
};

const GraduateMain: React.FC<Props> = ({ selected }) => (
  <section className="main-content">
    <div className="breadcrumb" id="breadcrumb">
      Home &gt; 졸업
    </div>
    <div id="title" className="title">졸업</div>

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

export default GraduateMain;


