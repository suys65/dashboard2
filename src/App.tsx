import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdmissionPage from './pages/AdmissionPage';
import AcademicPage from './pages/AcademicPage';
import GradePage from './pages/GradePage';
import GraduatePage from './pages/GraduatePage';
import EtcPage from './pages/EtcPage';
import Header from './components/header';
import SupersetEmbed from './components/supersetEmbed';
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
// 구글 로그인 관련 라우트 제거됨

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 로그인 페이지는 보호되지 않음 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 구글 로그인 관련 라우트 제거됨 */}
          
          {/* 모든 다른 페이지는 보호됨 */}
          <Route path="/" element={
            <ProtectedRoute>
              <Header />
              <section className="start-content">
                <div id="title" className="title">신입생 및 재학생 현황</div>
                <SupersetEmbed />
              </section>
            </ProtectedRoute>
          } />
          
          <Route path="/admission" element={
            <ProtectedRoute>
              <Header />
              <AdmissionPage />
            </ProtectedRoute>
          } />
          
          <Route path="/academic" element={
            <ProtectedRoute>
              <Header />
              <AcademicPage />
            </ProtectedRoute>
          } />
          
          <Route path="/grade" element={
            <ProtectedRoute>
              <Header />
              <GradePage />
            </ProtectedRoute>
          } />
          
          <Route path="/graduate" element={
            <ProtectedRoute>
              <Header />
              <GraduatePage />
            </ProtectedRoute>
          } />
          
          <Route path="/etc" element={
            <ProtectedRoute>
              <Header />
              <EtcPage />
            </ProtectedRoute>
          } />
          
          {/* Admission 하위 페이지들 */}
          <Route path="/admission/freshman-recruit" element={
            <ProtectedRoute>
              <Header />
              <FreshmanRecruitPage />
            </ProtectedRoute>
          } />
          
          <Route path="/admission/freshman-grade" element={
            <ProtectedRoute>
              <Header />
              <FreshmanGradePage />
            </ProtectedRoute>
          } />
          
          {/* Academic 하위 페이지들 */}
          <Route path="/academic/leave-return" element={
            <ProtectedRoute>
              <Header />
              <LeaveReturnPage />
            </ProtectedRoute>
          } />
          
          <Route path="/academic/dropout" element={
            <ProtectedRoute>
              <Header />
              <DropoutPage />
            </ProtectedRoute>
          } />
          
          <Route path="/academic/transfer" element={
            <ProtectedRoute>
              <Header />
              <TransferPage />
            </ProtectedRoute>
          } />
          
          <Route path="/academic/double-major" element={
            <ProtectedRoute>
              <Header />
              <DoubleMajorPage />
            </ProtectedRoute>
          } />
          
          <Route path="/academic/interdisciplinary" element={
            <ProtectedRoute>
              <Header />
              <InterdisciplinaryPage />
            </ProtectedRoute>
          } />
          
          {/* Grade 하위 페이지들 */}
          <Route path="/grade/total" element={
            <ProtectedRoute>
              <Header />
              <TotalCreditPage />
            </ProtectedRoute>
          } />
          
          <Route path="/grade/major" element={
            <ProtectedRoute>
              <Header />
              <MajorCreditPage />
            </ProtectedRoute>
          } />
          
          <Route path="/grade/general" element={
            <ProtectedRoute>
              <Header />
              <GeneralCreditPage />
            </ProtectedRoute>
          } />
          
          {/* Graduate 하위 페이지들 */}
          <Route path="/graduate/undergrad" element={
            <ProtectedRoute>
              <Header />
              <UndergradPage />
            </ProtectedRoute>
          } />
          
          <Route path="/graduate/grad-school" element={
            <ProtectedRoute>
              <Header />
              <GradSchoolPage />
            </ProtectedRoute>
          } />
          
          {/* ETC 하위 페이지들 */}
          <Route path="/etc/edu-satisfaction" element={
            <ProtectedRoute>
              <Header />
              <EduSatisfactionPage />
            </ProtectedRoute>
          } />
          
          <Route path="/etc/staff" element={
            <ProtectedRoute>
              <Header />
              <StaffStatusPage />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
