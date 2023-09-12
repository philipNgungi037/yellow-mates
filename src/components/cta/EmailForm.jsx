import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the email here, such as sending it to a server or storing it in state.
    console.log('Email submitted:', email);
  };

  return (
    <div className='email-form  w-full p-8'>
      {/* <h2>Email Submission Form</h2> */}
      <form onSubmit={handleSubmit} className='w-full'>
        <label>
          <input
            type="email"
            placeholder='enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='  p-8 text-black'
          />
        </label>
        <button type="submit" className=' bg-blue-200 p-8'>Submit</button>
      </form>
    </div>
  );
}

export default EmailForm;
