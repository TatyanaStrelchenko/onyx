// import { useState } from 'react';
import './Form.scss';

const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("https://httpbin.org/post", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         mobileNumber: mobileNumber,
  //       }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setName("");
  //       setEmail("");
  //       setMessage("User created successfully");
  //     } else {
  //       setMessage("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <form action="" className="form">
      <label htmlFor="name">
        <span className="text-control">Name</span>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ann Hateway"
          className="form-control"
        />
      </label>
      <label htmlFor="email">
        <span className="text-control">Email</span>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ann_hateway@gmail.com"
          className="form-control"
        />
      </label>
      <label htmlFor="phone">
        <span className="text-control">Phone</span>
        <input
          id="phone"
          type="phone"
          name="phone"
          placeholder="Phone number"
          className="form-control"
        />
      </label>
      <label htmlFor="message">
        <span className="text-control">Message</span>
        <textarea
          id="message"
          name="message"
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
