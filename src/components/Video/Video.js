/* eslint-disable jsx-a11y/media-has-caption */
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
          autoPlay="1"
          mute="1"
          allow="autoplay"
          showinfo="1"
        />
      </div>
      {/* <video className="video-holder" width="100%" height="1000px" >
<source src="https://drive.google.com/file/d/11VWy4XLoHlwkjzDT_lscEphlfOKwyMiO/preview?start=1" type="video/mp4"/>
 
 </video> */}
    </div>
  );
};

export { Video };
