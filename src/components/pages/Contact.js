import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/form.css';
import { validateEmail } from '../../utils/helpers';

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  //
  const handleEmptyField = (event) => {
    if (event.target.value.length === 0) {
      setError(`${event.target.name} field is required.`);
    } else {
      setError('');
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u5gwbp8', 'template_nts1yqk', form.current, 'f6dIrrX1fEOYc8AJF').then(
      () => {
        setError('message sent');
        window.location.reload(false);
      },
      () => {
        setError(error);
      }
    );

    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }
  };

  return (
    <section>
      <div className="container">
        <div className="content-headings">
          <h2 className="headings">Contact</h2>
          <p className="p">
            Email me at{' '}
            <span>
              <a href="mailto:huwlrichmond@gmail.com">huwlrichmond@gmail.com</a>
            </span>{' '}
            or use the mail feature below.
          </p>
        </div>
        <div className="form-style">
          <form id="contact-form" ref={form}>
            <label htmlFor="name">
              <span>
                Name <span className="required">*</span>
              </span>
              <input
                value={name}
                name="name"
                onBlur={handleEmptyField}
                onChange={handleInputChange}
                type="text"
                placeholder="Your Name"
                id="name-input"
              />
            </label>

            <label htmlFor="email">
              <span>
                Email <span className="required">*</span>
              </span>
              <input
                value={email}
                type="email"
                name="email"
                onBlur={handleEmptyField}
                onChange={handleInputChange}
                placeholder="youremail@email.com"
                id="email-input"
              />
            </label>

            <label htmlFor="message">
              <span>
                Message <span className="required">*</span>
              </span>
              <textarea
                value={message}
                name="message"
                type="text"
                onBlur={handleEmptyField}
                onChange={handleInputChange}
                placeholder="Your Message"
                id="example-message"></textarea>
            </label>
            <div>
              {/**/}
              <button className="bttn" onClick={sendEmail}>
                Submit
              </button>
            </div>
          </form>
          {error && (
            <div>
              <p className="error-text">{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
