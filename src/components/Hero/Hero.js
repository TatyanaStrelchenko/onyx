import './Hero.scss';

const Hero = ({ children, background, height }) => {
  // const style = {
  //   background,
  //   height
  // }

  const style = {
    backgroundColor: `${background}`,
    height: `${height}`
  };

  return (
    <section className="banner" style={style}>
      <div className="container">{children}</div>
    </section>
  );
};

export { Hero };
