import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmissionPage from './pages/AdmissionPage';
import AcademicPage from './pages/AcademicPage';
import GradePage from './pages/GradePage';
import GraduatePage from './pages/GraduatePage';
import EtcPage from './pages/EtcPage';
import Header from './components/header';
import TableauEmbed from './components/tableauEmbed';
import './styles/styles.css';
// Admission sub pages
import FreshmanRecruitPage from './pages/admission/FreshmanRecruitPage';
import FreshmanGradePage from './pages/admission/FreshmanGradePage';
// Academic sub pages
import LeaveReturnPage from './pages/academic/LeaveReturnPage';
import DropoutPage from './pages/academic/DropoutPage';
import TransferPage from './pages/academic/TransferPage';
import DoubleMajorPage from './pages/academic/DoubleMajorPage';
import InterdisciplinaryPage from './pages/academic/InterdisciplinaryPage';
// Grade sub pages
import TotalCreditPage from './pages/grade/TotalCreditPage';
import MajorCreditPage from './pages/grade/MajorCreditPage';
import GeneralCreditPage from './pages/grade/GeneralCreditPage';
// Graduate sub pages
import UndergradPage from './pages/graduate/UndergradPage';
import GradSchoolPage from './pages/graduate/GradSchoolPage';
// ETC sub pages
import EduSatisfactionPage from './pages/etc/EduSatisfactionPage';
import StaffStatusPage from './pages/etc/StaffStatusPage';
import LoginPage from './pages/LoginPage';
import GoogleSuccessPage from './pages/auth/GoogleSuccessPage';
import GoogleFailPage from './pages/auth/GoogleFailPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/grade" element={<GradePage />} />
        <Route path="/graduate" element={<GraduatePage />} />
        <Route path="/etc" element={<EtcPage />} />
        {/* Admission */}
        <Route path="/admission/freshman-recruit" element={<FreshmanRecruitPage />} />
        <Route path="/admission/freshman-grade" element={<FreshmanGradePage />} />
        {/* Academic */}
        <Route path="/academic/leave-return" element={<LeaveReturnPage />} />
        <Route path="/academic/dropout" element={<DropoutPage />} />
        <Route path="/academic/transfer" element={<TransferPage />} />
        <Route path="/academic/double-major" element={<DoubleMajorPage />} />
        <Route path="/academic/interdisciplinary" element={<InterdisciplinaryPage />} />
        {/* Grade */}
        <Route path="/grade/total" element={<TotalCreditPage />} />
        <Route path="/grade/major" element={<MajorCreditPage />} />
        <Route path="/grade/general" element={<GeneralCreditPage />} />
        {/* Graduate */}
        <Route path="/graduate/undergrad" element={<UndergradPage />} />
        <Route path="/graduate/grad-school" element={<GradSchoolPage />} />
        {/* ETC */}
        <Route path="/etc/edu-satisfaction" element={<EduSatisfactionPage />} />
        <Route path="/etc/staff" element={<StaffStatusPage />} />
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/google/success" element={<GoogleSuccessPage />} />
        <Route path="/auth/google/fail" element={<GoogleFailPage />} />
        <Route path="/" element={
          <section className="start-content">
            <div id="title" className="title">신입생 및 재학생 현황</div>
            <TableauEmbed />
          </section>
        } />
      </Routes>
    </Router>
  );
}

export default App;
