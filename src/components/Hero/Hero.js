import './Hero.scss';

const Hero = ({ children, background }) => {
  // const style = {
  //   background,
  //   height
  // }

  const backgroundImage = `background: ${background}`;

  return (
    <section className="banner" style={{ backgroundImage }}>
      <div className="container">{children}</div>
    </section>
  );
};

export { Hero };
