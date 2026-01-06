import { useState } from 'react';
import EtcSidebar from '../../components/Sidebar/EtcSidebar';
import EtcMain from '../../components/MainContent/EtcMain';

type SelectedType = 'satisfactionMajor' | 'staffProfessor' | 'staffAssistant';

const StaffStatusPage = () => {
  const [selected, setSelected] = useState<SelectedType>('staffProfessor');

  return (
    <>
      <EtcSidebar submenu="staff" selected={selected} onSelect={setSelected} />
      <EtcMain submenu="staff" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default StaffStatusPage;
