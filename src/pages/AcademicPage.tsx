import { useState } from 'react';
import AcademicSidebar from '../components/Sidebar/AcademicSidebar';
import AcademicMain from '../components/MainContent/AcademicMain';

type SelectedType = 
  | 'leaveMajor' | 'leaveGrade'
  | 'dropoutMajor' | 'dropoutGrade'
  | 'transferInMajor' | 'transferOutMajor' | 'transferInGrade' | 'transferOutGrade'
  | 'doubleApplyMajor' | 'doubleBelongMajor' | 'doubleApplyGrade' | 'doubleBelongGrade'
  | 'interMajor' | 'interBelongMajor' | 'interMajorGrade' | 'interBelongGrade';

const AcademicPage = () => {
  const [selected, setSelected] = useState<SelectedType>('leaveMajor');

  return (
    <>
      <AcademicSidebar submenu="leave" selected={selected} onSelect={setSelected} />
      <AcademicMain submenu="leave" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default AcademicPage;
