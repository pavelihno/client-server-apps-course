import {Component} from "react";

import '../assets/styles/Header.css';
import '../assets/styles/Base.css';
class Header extends Component {
  render() {
    return (
      <header className='column-flex align-left'>
        <h1>Welcome to my page!</h1>
      </header>
    );
  }
}

export default Header;