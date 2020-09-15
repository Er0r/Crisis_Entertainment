import React from 'react';
import './Assets/App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navber from './Components/Navber';
import About from './Routes/About';
import support from './Routes/Support';
import Homepage from './Routes/Homepage';
import Footer from './Components/Footer';
import Patch from './Routes/Patch';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navber />
        <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/Crisis_Entertainment" component={Homepage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/support" component={support}></Route>
            <Route path="/patch" component={Patch}></Route>
        </Switch>
        <Footer />
    </div>
</BrowserRouter>
  );
}



export default App;
