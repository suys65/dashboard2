import { useState } from 'react';
import AcademicSidebar from '../../components/Sidebar/AcademicSidebar';
import AcademicMain from '../../components/MainContent/AcademicMain';

type SelectedType = 
  | 'leaveMajor' | 'leaveGrade'
  | 'dropoutMajor' | 'dropoutGrade'
  | 'transferInMajor' | 'transferOutMajor' | 'transferInGrade' | 'transferOutGrade'
  | 'doubleApplyMajor' | 'doubleBelongMajor' | 'doubleApplyGrade' | 'doubleBelongGrade'
  | 'interMajor' | 'interBelongMajor' | 'interMajorGrade' | 'interBelongGrade';

const DropoutPage = () => {
  const [selected, setSelected] = useState<SelectedType>('dropoutMajor');

  return (
    <>
      <AcademicSidebar submenu="dropout" selected={selected} onSelect={setSelected} />
      <AcademicMain submenu="dropout" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default DropoutPage;
