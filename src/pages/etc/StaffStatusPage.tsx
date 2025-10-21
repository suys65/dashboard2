import { useState } from 'react';
import EtcSidebar from '../../components/Sidebar/EtcSidebar';
import EtcMain from '../../components/MainContent/EtcMain';

type SelectedType = 'satisfactionMajor' | 'staffMajor';

const StaffStatusPage = () => {
  const [selected, setSelected] = useState<SelectedType>('staffMajor');

  return (
    <>
      <EtcSidebar submenu="staff" selected={selected} onSelect={setSelected} />
      <EtcMain submenu="staff" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default StaffStatusPage;
