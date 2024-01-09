import logo from './logo.svg';
import './App.css';

import NavbarContainer from './components/NavbarContainer';
import { RightContainer } from './components/RightContainer';

import {list} from './data/navbarItems.js'

function App() {
  return (
    <div className="App">
     <NavbarContainer navbarItems={list}/>
     <RightContainer/>

    </div>
  );
}

export default App;
