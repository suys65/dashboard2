import { useState } from 'react';
import AcademicSidebar from '../components/Sidebar/AcademicSidebar';
import AcademicMain from '../components/MainContent/AcademicMain';

const AcademicPage = () => {
  const [selected, setSelected] = useState<'leave' | 'dropout' | 'transfer' | 'double' | 'inter'>('leave'); // 첫 번째 항목이 기본값

  return (
    <div style={{ display: 'flex' }}>
      <AcademicSidebar selected={selected} onSelect={setSelected} />
      <AcademicMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default AcademicPage;


