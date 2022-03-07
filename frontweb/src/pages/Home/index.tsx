import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from '../../components/ButtonIcon/catalogbutton';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização de seu
                sonho
              </p>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="home-button-container base-card">
          <Link to="/products">
            <ButtonIcon />
          </Link>
          <div className="button-content-container">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
