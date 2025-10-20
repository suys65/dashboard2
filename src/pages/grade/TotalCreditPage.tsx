import { useState } from 'react';
import GradeSidebar from '../../components/Sidebar/GradeSidebar';
import GradeMain from '../../components/MainContent/GradeMain';

const TotalCreditPage = () => {
  const [selected, setSelected] = useState<'total' | 'major' | 'general'>('total');

  return (
    <div style={{ display: 'flex' }}>
      <GradeSidebar selected={selected} onSelect={setSelected} />
      <GradeMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default TotalCreditPage;


