import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import MainArea from './components/MainArea';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <MainArea />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
