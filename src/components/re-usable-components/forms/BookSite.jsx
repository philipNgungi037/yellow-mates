// BookSite.js
import React, { useState } from 'react';
import { bookSiteFields } from './formsData';

const BookSite = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='border border-yellow-400 '>
      <h2>BookSite</h2>
      <form onSubmit={handleSubmit} className='m-4' >
        {bookSiteFields.map((field) => (
          <div key={field.name} className='flex flex-col gap-2 '>
            <label>
              {field.label}:
              <input className='border bg-yellow-400 px-2'
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required
              />
            </label>
            <br />
          </div>
        ))}
        <br />
        <button type="submit  " className='bg-yellow-400 hover:bg-white' >Submit</button>
      </form>
    </div>
  );
};

export default BookSite;
