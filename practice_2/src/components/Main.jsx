import {Component} from "react";

import '../assets/styles/Base.css';
import Poster from '../assets/jpg/poster.jpeg';

class Main extends Component {
  render() {
    return (
      <div className='column-flex'>
        <img className='poster' src={Poster} alt='poster'/>
      </div>
    );
  }
}

export default Main;