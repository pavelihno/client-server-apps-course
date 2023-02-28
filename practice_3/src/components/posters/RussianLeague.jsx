import {Component} from "react";
import Base from "../Base";

import Poster from '../../assets/jpg/russian_league.jpeg';

class RussianLeague extends Component {
  render() {
    return (
      <Base poster={Poster} title='Russian League' />
    );
  }
}

export default RussianLeague;