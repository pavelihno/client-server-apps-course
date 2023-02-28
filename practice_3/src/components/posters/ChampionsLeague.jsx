import {Component} from "react";
import Base from "../Base";

import Poster from '../../assets/jpg/champions_league.jpeg';

class ChampionsLeague extends Component {
  render() {
    return (
      <Base poster={Poster} title='Champions League' />
    );
  }
}

export default ChampionsLeague;