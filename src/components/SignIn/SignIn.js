import React, { useState } from 'react';

import FromInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email', email);
    console.log('email', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FromInput
          type='email'
          name='email'
          value={email}
          required
          handleChange={(e) => setEmail(e.target.value)}
          label='email'
        />
        <FromInput
          type='password'
          name='password'
          value={password}
          required
          handleChange={(e) => setPassword(e.target.value)}
          label='password'
        />

        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
