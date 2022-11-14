import './App.css';
import  Header from './component/header/Header';
import Dashboard from './component/dashboard/Dashboard';
import Footer from './component/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Middle from './component/down/Down';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Homepage />      
    </div>
  );
}

export default App;
