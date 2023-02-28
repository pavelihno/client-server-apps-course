import {Component} from "react";

import '../assets/styles/Footer.css';
import '../assets/styles/Base.css';
import TelegramLogo from '../assets/png/telegram.png';
import VKLogo from '../assets/png/vk.png';

class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }
  TelegramUrl = 'https://t.me/pavelihno';
  VKUrl = 'https://vk.com/pavelihno';
  render() {
    return (
      <footer className='column-flex'>
        <div className='row-flex logo-row'>
          <a href={this.TelegramUrl} target='_blank'><img className='social-logo' alt='telegram' title='Telegram' src={TelegramLogo}/></a>
          <a href={this.VKUrl} target='_blank'><img className='social-logo' alt='vk' title='VK' src={VKLogo}/></a>
        </div>
        <div className='row-flex'>
          <span className='bold underline'>©{this.getYear()} Savinov Pavel</span>
        </div>
      </footer>
    );
  }
}

export default Footer;