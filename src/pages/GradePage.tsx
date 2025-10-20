import { useState } from 'react';
import GradeSidebar from '../components/Sidebar/GradeSidebar';
import GradeMain from '../components/MainContent/GradeMain';

const GradePage = () => {
  const [selected, setSelected] = useState<'total' | 'major' | 'general'>('total'); // 첫 번째 항목이 기본값

  return (
    <div style={{ display: 'flex' }}>
      <GradeSidebar selected={selected} onSelect={setSelected} />
      <GradeMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default GradePage;


