import './App.css';
// import  Header from './component/header/Header';
// import Dashboard from './component/dashboard/Dashboard';
// import Footer from './component/footer/Footer';
import { BrowserRouter, Route, Routes,Link,NavLink } from "react-router-dom";
// import Middle from './component/down/Down';
import Homepage from './pages/Homepage';
import Placetostay from './component/placetostay/Placetostay';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/place-to-stay" element={<Placetostay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
