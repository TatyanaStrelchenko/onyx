import './Form.scss';

const Form = () => {
  return (
    <form action="" className="form">
      <label htmlFor="a">
        {' '}
        <span className="text-control">Name</span>
        <input type="text" placeholder="Ann Hateway" id="a" className="form-control" />
      </label>
      <label htmlFor="a">
        {' '}
        <span className="text-control">Email</span>
        <input type="email" placeholder="ann_hateway@gmail.com" className="form-control" />
      </label>
      <label htmlFor="a">
        {' '}
        <span className="text-control">Phone</span>
        <input type="phone" placeholder="+380635865432" className="form-control" />
      </label>
      <label htmlFor="a">
        {' '}
        <span className="text-control">Message</span>
        <textarea
          name="text"
          cols="30"
          rows="10"
          className="form-control"
          placeholder="Your message"
        />
      </label>
      <input type="submit" className="btn btn-primary" value="Send a Request" />
    </form>
  );
};

export { Form };
