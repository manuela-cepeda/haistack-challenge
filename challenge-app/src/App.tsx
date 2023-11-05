import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';


function App() {
  return (
    <BrowserRouter > 
    <NavBar />
       <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route  path='/add' element={<AddPage />} />
        <Route  path='/edit/:id' element={<EditPage />} />
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
