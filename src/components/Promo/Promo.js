import './Promo.scss';

const Promo = ({ children, styles }) => {
  const sectionStyle = {
    backgroundImage: `url(${styles})`
  };

  return (
    <section className="promo-section section" style={sectionStyle}>
      <div className="container">{children}</div>
    </section>
  );
};

export { Promo };
