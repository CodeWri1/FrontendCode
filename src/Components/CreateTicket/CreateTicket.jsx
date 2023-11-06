import React, { useState } from 'react';
import './CreateTicket.css';

const CreateTicket = () => {
  const [numbers, setNumbers] = useState(['Your Number', 'Your Number', 'Your Number', 'Your Number', 'Your Number', 'Your Number']);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user input here
    if (firstName && lastName && numbers.every(number => number >= 1 && number <= 49)) {
      // Ticket creation logic (e.g., sending data to the server)

      // Display success message
      setSuccessMessage('Ticket created successfully! Redirecting to dashboard...');
    } else {
      setSuccessMessage('Invalid input. Please check your entries.');
    }
  };

  return (
    <div className="create-ticket">
      <h2>Create Your Lottery Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Choose 6 Numbers (1-49):</label>
          {numbers.map((number, index) => (
            <input
              key={index}
              type="number"
              placeholder="Your Number"
              value={number === 'Your Number' ? '' : number}
              min="1"
              max="49"
              onChange={(e) => handleNumberChange(index, parseInt(e.target.value))}
            />
          ))}
        </div>
        <button type="submit">Create Ticket</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default CreateTicket;
