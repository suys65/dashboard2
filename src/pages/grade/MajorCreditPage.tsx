import { useState } from 'react';
import GradeSidebar from '../../components/Sidebar/GradeSidebar';
import GradeMain from '../../components/MainContent/GradeMain';

type SelectedType = 
  | 'totalMajor' | 'totalYear'
  | 'majorMajor' | 'majorYear'
  | 'generalMajor' | 'generalYear';

const MajorCreditPage = () => {
  const [selected, setSelected] = useState<SelectedType>('majorMajor');

  return (
    <>
      <GradeSidebar submenu="major" selected={selected} onSelect={setSelected} />
      <GradeMain submenu="major" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default MajorCreditPage;
