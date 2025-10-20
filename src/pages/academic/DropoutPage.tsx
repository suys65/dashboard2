import { useState } from 'react';
import AcademicSidebar from '../../components/Sidebar/AcademicSidebar';
import AcademicMain from '../../components/MainContent/AcademicMain';

const DropoutPage = () => {
  const [selected, setSelected] = useState<'leave' | 'dropout' | 'transfer' | 'double' | 'inter'>('dropout');

  return (
    <div style={{ display: 'flex' }}>
      <AcademicSidebar selected={selected} onSelect={setSelected} />
      <AcademicMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default DropoutPage;


