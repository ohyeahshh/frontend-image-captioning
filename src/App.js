import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SharedComponent from './components/SharedComponent';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Scope from './pages/Scope';
import Summary from './pages/Summary';
import Footer from './shared/Footer';
import Sidebar from './shared/Sidebar';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
    <Router>

      <ScrollToTop/>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<SharedComponent/>} >
   
    <Route index element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/scope" element={<Scope/>} />
    <Route path="/summary" element={<Summary/>} />

    <Route path="*" element={<Error404/>} />


    </Route>
   </Routes>
       </Router>
       </>
  );
}

export default App;