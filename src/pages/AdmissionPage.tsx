import React, { useState } from 'react';
import AdmissionSidebar from '../components/Sidebar/AdmissionSidebar';
import AdmissionMain from '../components/MainContent/AdmissionMain';

const AdmissionPage = () => {
  const [selected, setSelected] = useState<'major' | 'exam'>('major');

  return (
    <div style={{ display: 'flex' }}>
      <AdmissionSidebar selected={selected} onSelect={setSelected} />   
      <AdmissionMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default AdmissionPage;