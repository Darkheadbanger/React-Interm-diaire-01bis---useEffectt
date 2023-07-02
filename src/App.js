import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

export default function App() {
  let [email, setEmail] = useState('');
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  React.useEffect(() => {
    console.log(`email has changed`);
  }, [email]);

  React.useEffect(() => {
    if (isUserLoggedIn) {
      console.log('user is logged in');
    } else {
      console.log('Bye !');
    }
  }, [isUserLoggedIn]);

  const logIn = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(false);
  };

  return (
    <div className="App">
      <form onSubmit={logIn}>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="elon@spacex.com"
          value={email}
          onChange={() => setEmail(event.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
      <button onClick={logOut}>Lougout</button>
      <div>{isUserLoggedIn && <Message />}</div>
    </div>
  );
}
