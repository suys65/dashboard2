import { useState } from 'react';
import AcademicSidebar from '../../components/Sidebar/AcademicSidebar';
import AcademicMain from '../../components/MainContent/AcademicMain';

type SelectedType = 
  | 'leaveMajor' | 'leaveGrade'
  | 'dropoutMajor' | 'dropoutGrade'
  | 'transferInMajor' | 'transferOutMajor' | 'transferInGrade' | 'transferOutGrade'
  | 'doubleApplyMajor' | 'doubleBelongMajor' | 'doubleApplyGrade' | 'doubleBelongGrade'
  | 'interMajor' | 'interBelongMajor' | 'interMajorGrade' | 'interBelongGrade';

const DoubleMajorPage = () => {
  const [selected, setSelected] = useState<SelectedType>('doubleApplyMajor');

  return (
    <>
      <AcademicSidebar submenu="double" selected={selected} onSelect={setSelected} />
      <AcademicMain submenu="double" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default DoubleMajorPage;
