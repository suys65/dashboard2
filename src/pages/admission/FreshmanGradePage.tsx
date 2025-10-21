import { useState } from 'react';
import AdmissionSidebar from '../../components/Sidebar/AdmissionSidebar';
import AdmissionMain from '../../components/MainContent/AdmissionMain';

const FreshmanGradePage = () => {
  const [selected, setSelected] = useState<'recruitMajor' | 'recruitExam' | 'gradeMajor' | 'gradeExam'>('gradeMajor');

  return (
    <>
      <AdmissionSidebar submenu="grade" selected={selected} onSelect={setSelected} />
      <AdmissionMain submenu="grade" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default FreshmanGradePage;


