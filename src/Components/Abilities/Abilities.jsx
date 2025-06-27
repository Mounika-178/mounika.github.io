// Abilities.jsx
import React from 'react';
import './Abilities.css';
import themePattern from "../assets/theme_pattern.jpg"
import { FaSortAmountUp, FaComments, FaClock, FaUsers, FaSyncAlt, FaLaptopCode } from 'react-icons/fa';

const Abilities = () => {
  const abilities = [
    {
      icon: <FaSortAmountUp className="icon yellow" />,
      title: 'Quality Focus',
      description: 'Delivering high-quality results while maintaining attention to every detail.'
    },
    {
      icon: <FaComments className="icon green" />,
      title: 'Reliable Communication',
      description: 'Keeping you updated at every step to ensure transparency and clarity.'
    },
    {
      icon: <FaClock className="icon pink" />,
      title: 'On-Time Delivery',
      description: 'Making sure projects are completed on schedule, with quality & attention to detail.'
    },
    {
      icon: <FaUsers className="icon blue" />,
      title: 'Team Collaboration',
      description: 'Experienced in working with peers during projects and internships.'
    },
    {
      icon: <FaSyncAlt className="icon teal" />,
      title: 'Adaptability',
      description: 'Quick learner, open to feedback, and able to adjust to evolving project needs.'
    },
    {
      icon: <FaLaptopCode className="icon orange" />,
      title: 'Self-Motivated Learner',
      description: 'Continuously upgrading skills through courses, projects, and practice.'
    }
  ];

  return (
    <div id="abilities" className='abilities'>
      <div className="abilities-title">
        <h1>My Abilities</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="abilities-container">
        {abilities.map((ability, index) => (
          <div key={index} className='abilities-format'>
            {ability.icon}
            <h2>{ability.title}</h2>
            <p>{ability.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
