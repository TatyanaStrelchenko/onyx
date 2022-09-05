import './Video.scss';
import VideoBg from '../../assets/video/VideoBg.mp4';

const Video = () => {
  return (
    <section className="video-section">
      <div className="video-holder">
        <div className="text-holder">
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
        </div>
        <video src={VideoBg} autoPlay loop muted />
      </div>
    </section>
  );
};

export { Video };
