
import logo from '../assets/logo.svg';
import arrow from '../assets/icon-arrow-down.svg';
import main_img from '../assets/image-hero-desktop.png';
import client_photo1 from '../assets/client-audiophile.svg';
import client_photo2 from '../assets/client-databiz.svg';
import client_photo3 from '../assets/client-maker.svg';
import client_photo4 from '../assets/client-meet.svg';

export const Main: React.FC = () => {

  return (
    <div className="page">
      <div className="header">
        <div className="container">
          <div className="header__block">
            <a href="/" className='logo'>
              <img src={logo} alt="" />
            </a>

            <ul className='nav'>
              <li className='nav__item'>
                <a href="/" className='nav__link nav__link--active'>Features</a>

                <img src={arrow} alt="" className='arrow'/>
              </li>
              <li className='nav__item'>
                <a href="/" className='nav__link nav__link--active'>Company</a>

                <img src={arrow} alt="" className='arrow'/>
              </li>
              <li className='nav__item'>
                <a href="/" className='nav__link'>Careers</a>
              </li>
              <li className='nav__item'>
                <a href="/" className='nav__link'>About</a>
              </li>
            </ul>
          </div>

          <div className="header__block-button">
            <a href="/" className="header__button">Login</a>
            <a href="/" className="header__button header__button-border">Register</a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="main__information">
          <div className="main__block-text">
            <h1 className='main__articule'>Make <br /> remote work</h1>

            <p className='main__text'>
              Get your teamin sync. no matter your location. 
              <br />
              Streamline processes, create team rituals, and
              <br />
              watch productivity soar.
            </p>

            <div className="main__button">
              Learn more
            </div>
          </div>

          <div className="main__block-client">
            <img src={client_photo1} alt="" />
            <img src={client_photo2} alt="" />
            <img src={client_photo3} alt="" />
            <img src={client_photo4} alt="" />
          </div>
        </div>

        <div className="main__block-img">
          <img src={main_img} alt="" className='main__img'/>
        </div>
      </div>
    </div>
  )
}