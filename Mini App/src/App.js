
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';


import FooterComponen from './componen/FooterComponen';
import HomeComponen from './componen/HomeComponen';
import NavbarComponen from './componen/NavbarComponen';
import Blog from './pages/Blog';
import Daftar from './pages/Daftar';
import Events from './pages/Events';
import Faq from './pages/Faq';
import Forum from './pages/Forum';
import Jobs from './pages/Jobs';
import Masuk from './pages/Masuk';
import Patner from './pages/Patner';
import Tentang from './pages/Tentang';

function App() {
  return (
    <div>
    <BrowserRouter>
    <NavbarComponen />
      <Routes>
        <Route path="/" element={<HomeComponen />} />
        <Route path="/Tentang" element={<Tentang/>} />
        <Route path="/Forum" element={<Forum/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Jobs" element={<Jobs/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Patner" element={<Patner/>} />
        <Route path="/Masuk" element={<Masuk/>} />
        <Route path="/Daftar" element={<Daftar/>} />
      </Routes>
      <FooterComponen/>
    </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
