import { useState } from 'react';
import AcademicSidebar from '../../components/Sidebar/AcademicSidebar';
import AcademicMain from '../../components/MainContent/AcademicMain';

type SelectedType = 
  | 'leaveMajor' | 'leaveGrade'
  | 'dropoutMajor' | 'dropoutGrade'
  | 'transferInMajor' | 'transferOutMajor' | 'transferInGrade' | 'transferOutGrade'
  | 'doubleApplyMajor' | 'doubleBelongMajor' | 'doubleApplyGrade' | 'doubleBelongGrade'
  | 'interMajor' | 'interBelongMajor' | 'interMajorGrade' | 'interBelongGrade';

const TransferPage = () => {
  const [selected, setSelected] = useState<SelectedType>('transferInMajor');

  return (
    <>
      <AcademicSidebar submenu="transfer" selected={selected} onSelect={setSelected} />
      <AcademicMain submenu="transfer" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default TransferPage;
