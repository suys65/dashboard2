import { useState } from 'react';
import EtcSidebar from '../../components/Sidebar/EtcSidebar';
import EtcMain from '../../components/MainContent/EtcMain';

const EduSatisfactionPage = () => {
  const [selected, setSelected] = useState<'satisfaction' | 'staff'>('satisfaction');

  return (
    <div style={{ display: 'flex' }}>
      <EtcSidebar selected={selected} onSelect={setSelected} />
      <EtcMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default EduSatisfactionPage;


