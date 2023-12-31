import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Details from './components/Details';
import Body from './components/Body';
import {useState} from 'react'
import { Provider, useSelector } from 'react-redux';
import appStore from './utils/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <Provider store={appStore}>
      <Navbar/>
      <Header/>
      <Details/>
      <Body/>
      </Provider>
    
  );
}

export default App;
