import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import {FirebaseState} from './context/firebase/FirebaseState';

function App() {
  
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <NavBar/>
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path={'/'} Component={Home}/>
              <Route path={'/About'} Component={About}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
    
  );
}

export default App;
