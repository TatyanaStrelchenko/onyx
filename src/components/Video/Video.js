import Fade from 'react-reveal/Fade';
import './Video.scss';
import VideoBg from '../../assets/video/VideoBg.mp4';

const Video = () => {
  return (
    <div className="video-section">
      <div className="video-holder">
        <div className="text-holder">
          <Fade duration={5000}>
            <h1>
              We
              <br />
              Make Deals
              <br />
              Come True.
            </h1>
            <p>
              Comprehensive financing solutions for commercial,
              <br /> multifamily and residential investment real estate.
            </p>
          </Fade>
        </div>
        <video src={VideoBg} autoPlay loop muted />
      </div>
    </div>
  );
};

export { Video };
