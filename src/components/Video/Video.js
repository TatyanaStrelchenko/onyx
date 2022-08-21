import './Video.scss';

const Video = () => {
  return (
    <div className="video-holder">
      <iframe
        title="video"
        src="https://drive.google.com/file/d/11VWy4XLoHlwkjzDT_lscEphlfOKwyMiO/preview"
        width="100%"
        height="1000px"
        border="0"
        allow="autoplay"
      />
    </div>
  );
};

export { Video };
