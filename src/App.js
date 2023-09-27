import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Details from './components/Details';
import Body from './components/Body';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Details/>
      <Body/>
    </>
  );
}

export default App;
