import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './components/userSignup';
import SignIn from './components/userLogin';
import Nav from './components/nav';
import Room from './components/room';
import ListenArea from './components/listenArea';
import MainPage from './views/mainPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path='/room' element={<Room />} />
          <Route path='/listen' element={<ListenArea/>} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
