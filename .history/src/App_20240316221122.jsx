import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <div className="flex justify-center mt-8">
        <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        <img src={reactLogo} className="w-16 h-16 ml-4" alt="React logo" />
      </div>
      <h1 className="text-center text-2xl font-bold mt-4">COMP 4513 Assignment 2</h1>
      <div className="flex justify-center mt-8">
        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
