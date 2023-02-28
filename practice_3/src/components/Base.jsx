import {Component} from "react";
import PropTypes from "prop-types";

import '../assets/styles/Base.css';


class Base extends Component {

  static propTypes = {
    title: PropTypes.object.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    const { title, poster} = this.props;

    return (
      <div className='column-flex'>
        <h3 className='underline'>{title}</h3>
        <img className='poster' src={poster} alt='poster'/>
      </div>
    );
  }
}

export default Base;