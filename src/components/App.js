import '../App.scss';
import Welcome from "./Welcome";
import Footer from "./Footer";
import SNav from './SNav';
import Nav from "./Nav";
import CamGrid from "./CamGrid";
import NotFound from './NotFound';
import Signup from "./Signup";
import Camera from './Camera';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import { Route, Routes, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

library.add(faEnvelope, faKey);

function App() {

  const [ authed, setAuthed ] = useState(!!document.cookie);
  const [ login, setLogin ] = useState(true);

  useEffect(()=>{
      const ws = new WebSocket("ws://localhost:3001/", "echo-protocol");

    return ()=>{
      ws.close();
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <SNav {...{authed, setAuthed}} />
      </header>

      {authed?(
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/grid" element={<CamGrid />} />
        <Route path="/grid/:id" element={<Camera />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      ):(
        <Signup { ...{login, setAuthed, setLogin } }/>
      )}

      <Footer />
    </div>
  );
}

export default App;
