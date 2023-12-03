import './App.css';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import PropertiesList from './components/properties/PropertiesList';
import PropertiesPage from './pages/properties/PropertiesPage';

function App() {
  return (
    <div className="app w-full overflow-clip ">
      <div className=" ">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/properties' element={<PropertiesPage  />}/>
        </Routes>
       
      </div>
    </div>
  );
}

export default App;
