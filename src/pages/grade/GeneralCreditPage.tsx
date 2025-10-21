import { useState } from 'react';
import GradeSidebar from '../../components/Sidebar/GradeSidebar';
import GradeMain from '../../components/MainContent/GradeMain';

type SelectedType = 
  | 'totalMajor' | 'totalYear'
  | 'majorMajor' | 'majorYear'
  | 'generalMajor' | 'generalYear';

const GeneralCreditPage = () => {
  const [selected, setSelected] = useState<SelectedType>('generalMajor');

  return (
    <>
      <GradeSidebar submenu="general" selected={selected} onSelect={setSelected} />
      <GradeMain submenu="general" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default GeneralCreditPage;
