// import { useState } from 'react';
import { useFormik } from 'formik';

import './Form.scss';

const Form = () => {
  // const registerHandler = async (values, { setSubmitting }) => {
  //   const payload = {
  //     // make payload here using values
  //   }
  //   try {
  //     const response = await axios.post('write_url_here', payload)
  //     console.log(response.data)
  //   } catch (e) {
  //     console.log(e)
  //   } finally {
  //     setSubmitting(false)
  //   }
  // }

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required field';
    } else if (values.name.length === '') {
      errors.name = 'Must be more than 1 symbol';
    }

    if (!values.phone) {
      errors.phone = 'Required field';
    } else if (values.phone.length < 5) {
      errors.phone = 'Invalid phone number';
    }

    if (!values.message) {
      errors.message = 'Required field';
    }

    if (!values.email) {
      errors.email = 'Required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form action="" className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className="label">
        <span className="text-control">Name</span>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ann Hateway"
          className={`form-control ${formik.errors.name ? 'error-input' : 'success-input'}`}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div className="error-field">{formik.errors.name}</div> : null}
      </label>
      <label htmlFor="email" className="label">
        <span className="text-control">Email</span>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ann_hateway@gmail.com"
          className={`form-control ${formik.errors.email ? 'error-input' : 'success-input'}`}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div className="error-field">{formik.errors.email}</div> : null}
      </label>
      <label htmlFor="phone" className="label">
        <span className="text-control">Phone</span>
        <input
          id="phone"
          type="phone"
          name="phone"
          placeholder="Phone number"
          className={`form-control ${formik.errors.phone ? 'error-input' : 'success-input'}`}
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone ? <div className="error-field">{formik.errors.phone}</div> : null}
      </label>
      <label htmlFor="message" className="label">
        <span className="text-control">Message</span>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          className={`form-control ${formik.errors.message ? 'error-input' : 'success-input'}`}
          placeholder="Your message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        {formik.errors.message ? <div className="error-field">{formik.errors.message}</div> : null}
      </label>
      <input type="submit" className="btn btn-primary" value="Send a Request" />
    </form>
  );
};

export { Form };
