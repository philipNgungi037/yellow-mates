import './App.css';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import PropertiesPage from './pages/PropertiesPage';
import Header from './components/landing-page/header/Header';
import SinglePropertyPage from './pages/SinglePropertyPage';

function App() {
  return (
    <div className="app w-full overflow-clip ">
      <Header />
      <div className=" ">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/properties' element={<PropertiesPage />} />
          <Route path='/property/:id' element={<SinglePropertyPage  />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
