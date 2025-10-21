import { useState } from 'react';
import GradeSidebar from '../../components/Sidebar/GradeSidebar';
import GradeMain from '../../components/MainContent/GradeMain';

type SelectedType = 
  | 'totalMajor' | 'totalYear'
  | 'majorMajor' | 'majorYear'
  | 'generalMajor' | 'generalYear';

const TotalCreditPage = () => {
  const [selected, setSelected] = useState<SelectedType>('totalMajor');

  return (
    <>
      <GradeSidebar submenu="total" selected={selected} onSelect={setSelected} />
      <GradeMain submenu="total" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default TotalCreditPage;
