import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form validation
  const handleBlur = (e) => {
    if (!formData[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() =>
              !validateEmail(formData.email) &&
              setErrors({ ...errors, email: 'Invalid email address' })
            }
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
      </form>
    </section>
  );
}

export default Contact;
