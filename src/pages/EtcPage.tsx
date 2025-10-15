import React, { useState } from 'react';
import EtcSidebar from '../components/Sidebar/EtcSidebar';
import EtcMain from '../components/MainContent/EtcMain';

const EtcPage = () => {
  const [selected, setSelected] = useState<'satisfaction' | 'staff'>('satisfaction');

  return (
    <div style={{ display: 'flex' }}>
      <EtcSidebar selected={selected} onSelect={setSelected} />
      <EtcMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default EtcPage;


