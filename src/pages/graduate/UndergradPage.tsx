import React, { useState } from 'react';
import GraduateSidebar from '../../components/Sidebar/GraduateSidebar';
import GraduateMain from '../../components/MainContent/GraduateMain';

const UndergradPage = () => {
  const [selected, setSelected] = useState<'undergrad' | 'gradschool'>('undergrad');

  return (
    <div style={{ display: 'flex' }}>
      <GraduateSidebar selected={selected} onSelect={setSelected} />
      <GraduateMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default UndergradPage;


