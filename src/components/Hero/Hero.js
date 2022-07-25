import './Hero.scss';

const Hero = ({ children, styles }) => {
  const sectionStyle = {
    backgroundImage: `url(${styles})`
  };

  return (
    <section className="banner" style={sectionStyle}>
      <div className="container">{children}</div>
    </section>
  );
};

export { Hero };
