import { useState } from 'react';
import EtcSidebar from '../../components/Sidebar/EtcSidebar';
import EtcMain from '../../components/MainContent/EtcMain';

type SelectedType = 'satisfactionMajor' | 'staffMajor';

const EduSatisfactionPage = () => {
  const [selected, setSelected] = useState<SelectedType>('satisfactionMajor');

  return (
    <>
      <EtcSidebar submenu="satisfaction" selected={selected} onSelect={setSelected} />
      <EtcMain submenu="satisfaction" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default EduSatisfactionPage;
