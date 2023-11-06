import React, { useState } from 'react';
import './Dashboard.css'; // Import your CSS file here

const Dashboard = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([7, 14, 22, 35, 41, 49]);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Lucky Balls</h2>
      <div className="selected-numbers">
        <h3 className="numbers-title">Selected Numbers:</h3>
        <ul className="numbers-list">
          {selectedNumbers.map((number, index) => (
            <li
              key={index}
              className={`number-item ${selectedNumbers[index]}`}
            >
              {selectedNumbers[index]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
