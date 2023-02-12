import {Component} from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";
import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='content'>
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
