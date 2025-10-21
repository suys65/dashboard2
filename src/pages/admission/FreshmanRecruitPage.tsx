import { useState } from 'react';
import AdmissionSidebar from '../../components/Sidebar/AdmissionSidebar';
import AdmissionMain from '../../components/MainContent/AdmissionMain';

const FreshmanRecruitPage = () => {
  const [selected, setSelected] = useState<'recruitMajor' | 'recruitExam' | 'gradeMajor' | 'gradeExam'>('recruitMajor');

  return (
    <>
      <AdmissionSidebar submenu="recruit" selected={selected} onSelect={setSelected} />
      <AdmissionMain submenu="recruit" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default FreshmanRecruitPage;


