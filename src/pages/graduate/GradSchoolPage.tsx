import { useState } from 'react';
import GraduateSidebar from '../../components/Sidebar/GraduateSidebar';
import GraduateMain from '../../components/MainContent/GraduateMain';

const GradSchoolPage = () => {
  const [selected, setSelected] = useState<'undergrad' | 'gradschool'>('gradschool');

  return (
    <div style={{ display: 'flex' }}>
      <GraduateSidebar selected={selected} onSelect={setSelected} />
      <GraduateMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default GradSchoolPage;


