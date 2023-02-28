import React, {Component} from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/App.css';
import {Link, Route, Routes} from "react-router-dom";
import ChampionsLeague from "./components/posters/ChampionsLeague";
import RussianLeague from "./components/posters/RussianLeague";

class App extends Component {

  routes = {
    champions_league: 'champions_league',
    russian_league: 'russian_league'
  };

  render() {
    return (
      <div className='content'>
        <Header />
        <aside className='underline column-flex'>
          <Link to={this.routes.champions_league}>Champions League</Link>
          <Link to={this.routes.russian_league}>Russian League</Link>
        </aside>

        <main>
          <Routes>
            <Route path={this.routes.champions_league} element={<ChampionsLeague />} />
            <Route path={this.routes.russian_league} element={<RussianLeague />} />
          </Routes>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
