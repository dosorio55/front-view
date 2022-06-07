import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './core/header/Header';
import Profile from './pages/profile/Profile';
import Form from './pages/form/Form';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*'/>
        </Routes>
    </Router>
  );
}

export default App;
