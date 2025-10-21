import { useState } from 'react';
import GraduateSidebar from '../../components/Sidebar/GraduateSidebar';
import GraduateMain from '../../components/MainContent/GraduateMain';

type SelectedType = 'undergradMajor' | 'gradSchoolMajor';

const GradSchoolPage = () => {
  const [selected, setSelected] = useState<SelectedType>('gradSchoolMajor');

  return (
    <>
      <GraduateSidebar submenu="gradschool" selected={selected} onSelect={setSelected} />
      <GraduateMain submenu="gradschool" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default GradSchoolPage;
