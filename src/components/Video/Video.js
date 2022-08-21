/* eslint-disable react/jsx-no-undef */
import Fade from 'react-reveal/Fade';
import './Video.scss';

// import Image1 from '../../assets/image/los-angeles.jpg';

const Video = () => {
  return (
    <div className="video-page">
      <div className="video-holder">
        <div className="text-holder">
          <Fade top duration={2000}>
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
        <iframe
          title="video"
          src="https://drive.google.com/file/d/11VWy4XLoHlwkjzDT_lscEphlfOKwyMiO/preview"
          width="100%"
          height="100%"
          border="0"
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export { Video };
