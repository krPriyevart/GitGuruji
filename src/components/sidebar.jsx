// src/components/sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className='w-1/6 h-screen bg-slate-700 text-white flex flex-col justify-start py-4 leading-8'>
      <ul className='px-8'>
        <li className='cursor-pointer' onClick={() => toggleSection(0)}>Introduction</li>
        <li className='cursor-pointer ' onClick={() => toggleSection(1)}>Section 1</li>
        {activeSection === 1 && (
          <ul className='ml-4'>
            <li><Link to='/section/1/chapter/1'>Chapter 1</Link></li>
            <li><Link to='/section/1/chapter/2'>Chapter 2</Link></li>
            <li><Link to='/section/1/chapter/3'>Chapter 3</Link></li>
            <li><Link to='/section/1/chapter/4'>Chapter 4</Link></li>
            <li><Link to='/section/1/chapter/5'>Chapter 5</Link></li>
            <li><Link to='/section/1/chapter/6'>Chapter 6</Link></li>
            <li><Link to='/section/1/chapter/7'>Chapter 7</Link></li>
          </ul>
        )}
        <li className='cursor-pointer' onClick={() => toggleSection(2)}>Section 2</li>
        {activeSection === 2 && (
          <ul className='ml-4'>
            <li><Link to='/section/2/chapter/1'>Chapter 1</Link></li>
            <li><Link to='/section/2/chapter/2'>Chapter 2</Link></li>
            <li><Link to='/section/2/chapter/3'>Chapter 3</Link></li>
            <li><Link to='/section/2/chapter/4'>Chapter 4</Link></li>
            <li><Link to='/section/2/chapter/5'>Chapter 5</Link></li>
          </ul>
        )}
        <li className='cursor-pointer' onClick={() => toggleSection(3)}>Section 3</li>
        {activeSection === 3 && (
          <ul className='ml-4'>
            <li><Link to='/section/3/chapter/1'>Chapter 1</Link></li>
            <li><Link to='/section/3/chapter/2'>Chapter 2</Link></li>
            <li><Link to='/section/3/chapter/3'>Chapter 3</Link></li>
            <li><Link to='/section/3/chapter/4'>Chapter 4</Link></li>
            <li><Link to='/section/3/chapter/5'>Chapter 5</Link></li>
            <li><Link to='/section/3/chapter/6'>Chapter 6</Link></li>
            <li><Link to='/section/3/chapter/7'>Chapter 7</Link></li>
          </ul>
        )}
        {/* <li className='cursor-pointer' onClick={() => toggleSection(4)}>Section 4</li>
        {activeSection === 4 && (
          <ul className='ml-4'>
            <li><Link to='/section/4/chapter/1'>Chapter 1</Link></li>
            <li><Link to='/section/4/chapter/2'>Chapter 2</Link></li>
            <li><Link to='/section/4/chapter/3'>Chapter 3</Link></li>
            <li><Link to='/section/4/chapter/4'>Chapter 4</Link></li>
          </ul>
        )} */}
      </ul>
    </div>
  );
};

export default Sidebar;
