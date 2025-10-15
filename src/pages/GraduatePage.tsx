import React, { useState } from 'react';
import GraduateSidebar from '../components/Sidebar/GraduateSidebar';
import GraduateMain from '../components/MainContent/GraduateMain';

const GraduatePage = () => {
  const [selected, setSelected] = useState<'undergrad' | 'gradschool'>('undergrad'); // 첫 번째 항목이 기본값

  return (
    <div style={{ display: 'flex' }}>
      <GraduateSidebar selected={selected} onSelect={setSelected} />
      <GraduateMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default GraduatePage;


