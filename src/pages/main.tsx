import main_img from '../assets/image-hero-desktop.png';

import client_photo1 from '../assets/client-audiophile.svg';
import client_photo2 from '../assets/client-databiz.svg';
import client_photo3 from '../assets/client-maker.svg';
import client_photo4 from '../assets/client-meet.svg';
import Header from '../components/Header';

export const Main: React.FC = () => {

  return (
    <div className="page">
      <Header />
      <div className="wrapper">
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
    </div>
  )
}