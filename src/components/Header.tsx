import { useRef, useState } from "react";
import classnames from 'classnames';

import logo from '../assets/logo.svg';
import arrow from '../assets/icon-arrow-down.svg';

import icon_todo from '../assets/icon-todo.svg';
import icon_calendar from '../assets/icon-calendar.svg';
import icon_reminders from '../assets/icon-reminders.svg';
import icon_planning from '../assets/icon-planning.svg';

import icon_menu from '../assets/icon-menu.svg'
import icon_close_menu from '../assets/icon-close-menu.svg'


const Header = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(false);
  const [visibleCompany, setVisibleCompany] = useState(false);

  const featuresRef = useRef();
  const companyRef = useRef();

  const toggleVisibleFeatures = (): void => {
    setVisibleFeatures(!visibleFeatures);
  }

  const toggleVisibleCompany = (): void => {
    setVisibleCompany(!visibleCompany);
  }

  return (
      <div className="header">
        <div className="container">
          <div className="header__block">
            <a href="/" className='logo'>
              <img src={logo} alt="" />
            </a>

            <ul className='nav'>
              <li className='nav__item'>
                <p
                  className='nav__link nav__link--active'
                  onClick={toggleVisibleFeatures}
                >Features</p>

                <img src={arrow} alt="" className={classnames('arrow', {'arrow--active': visibleFeatures})}/>
              </li>
              <li className='nav__item'>
                <p 
                  className='nav__link nav__link--active'
                  onClick={toggleVisibleCompany}
                >Company</p>

                <img src={arrow} alt="" className={classnames('arrow', {'arrow--active': visibleCompany})}/>
              </li>
              <li className='nav__item'>
                <a href="/" className='nav__link'>Careers</a>
              </li>
              <li className='nav__item'>
                <a href="/" className='nav__link'>About</a>
              </li>
            </ul>

            {visibleFeatures && (
              <div className='add-block features--block'>
                <ul className='features'>
                  <li className='features__item'>
                    <img src={icon_todo} alt="" className='features__img'/>

                    <a href="/" className='features__link'>Todo List</a>
                  </li>
                  <li className='features__item'>
                    <img src={icon_calendar} alt="" className='features__img'/>

                    <a href="/" className='features__link'>Calendar</a>
                  </li>
                  <li className='features__item'>
                    <img src={icon_reminders} alt="" className='features__img'/>

                    <a href="/" className='features__link'>Reminders</a>
                  </li>
                  <li className='features__item'>
                    <img src={icon_planning} alt="" className='features__img'/>

                    <a href="/" className='features__link'>Planning</a>
                  </li>
                </ul>
              </div>
            )}

            {visibleCompany && (
              <div className="add-block company--block">
                <ul className='features'>
                  <li className='features__item'>
                    <a href="/" className='features__link'>History</a>
                  </li>
                  <li className='features__item'>
                    <a href="/" className='features__link'>Our Team</a>
                  </li>
                  <li className='features__item'>
                    <a href="/" className='features__link'>Blog</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="header__block-button">
            <a href="/" className="header__button">Login</a>
            <a href="/" className="header__button header__button-border">Register</a>
          </div>

          <div className="header__menu">
            <img src={icon_menu} alt="" className="header__menu-icon"/>
          </div>

          <div className="menu">
            <div className="menu__content">
              <img src={icon_close_menu} alt="" className="menu__icon"/>

              <ul>
                <li>
                  Features
                </li>
                <li>
                  Company
                </li>
                <li>
                  Careers
                </li>
                <li>
                  About
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;