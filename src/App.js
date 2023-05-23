import './App.css';
import Hero from './pages/home/hero.jsx'
import Login from './pages/Login/Login';
import Dashboard from '../src/pages/dashboard/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;