import React, { useState } from 'react';
import AcademicSidebar from '../../components/Sidebar/AcademicSidebar';
import AcademicMain from '../../components/MainContent/AcademicMain';

const TransferPage = () => {
  const [selected, setSelected] = useState<'leave' | 'dropout' | 'transfer' | 'double' | 'inter'>('transfer');

  return (
    <div style={{ display: 'flex' }}>
      <AcademicSidebar selected={selected} onSelect={setSelected} />
      <AcademicMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default TransferPage;


