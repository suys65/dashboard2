import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmissionPage from './pages/AdmissionPage';
import Header from './components/header';
import TableauEmbed from './components/tableauEmbed';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admission" element={<AdmissionPage />} />
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
