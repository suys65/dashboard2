import { useState } from 'react';
import GraduateSidebar from '../components/Sidebar/GraduateSidebar';
import GraduateMain from '../components/MainContent/GraduateMain';

type SelectedType = 'undergradMajor' | 'gradSchoolMajor';

const GraduatePage = () => {
  const [selected, setSelected] = useState<SelectedType>('undergradMajor');

  return (
    <>
      <GraduateSidebar submenu="undergrad" selected={selected} onSelect={setSelected} />
      <GraduateMain submenu="undergrad" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default GraduatePage;
