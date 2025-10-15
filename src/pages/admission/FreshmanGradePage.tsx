import React, { useState } from 'react';
import AdmissionSidebar from '../../components/Sidebar/AdmissionSidebar';
import AdmissionMain from '../../components/MainContent/AdmissionMain';

const FreshmanGradePage = () => {
  const [selected, setSelected] = useState<'major' | 'exam'>('exam'); // 신입생 성적은 exam 선택

  return (
    <div style={{ display: 'flex' }}>
      <AdmissionSidebar selected={selected} onSelect={setSelected} />
      <AdmissionMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default FreshmanGradePage;


