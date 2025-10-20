import { useState } from 'react';
import AdmissionSidebar from '../../components/Sidebar/AdmissionSidebar';
import AdmissionMain from '../../components/MainContent/AdmissionMain';

const FreshmanRecruitPage = () => {
  const [selected, setSelected] = useState<'major' | 'exam'>('major'); // 신입생 충원은 major 선택

  return (
    <div style={{ display: 'flex' }}>
      <AdmissionSidebar selected={selected} onSelect={setSelected} />
      <AdmissionMain selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default FreshmanRecruitPage;


