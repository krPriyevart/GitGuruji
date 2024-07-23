import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const getLinkClass = (path) => (
    activeLink === path || location.pathname === path ? 'bg-slate-900' : ''
  );

  const chapters = {
    '1': ['Intro to Git & GitHub', 'Creating Account', 'Creating Repository', 'Installing Git', 'Configuring Git', 'Basic Commands', 'Git Commands'],
    '2': ['Git Branches', 'Git Stashing', 'Git Rebasing', 'Git Log', 'Git Diff'],
    '3': ['Interactive Rebase', 'Git Cherry-Pick', 'Git Bisect', 'Git Submodules', 'Git Hooks', 'Git Reflog', 'Git Worktrees']
  };

  return (
    <div style={{ fontFamily: "Titillium Web"}} className=' w-1/6 h-auto font-sans bg-slate-800 text-white flex flex-col justify-start py-4 leading-8 shadow-lg overflow-y-auto'>
      <div className='px-8 py-2 '>
        <p className='text-2xl font-bold mb-4'>Git & GitHub Guide</p>
        <ul>
          <li className='font-semibold text-lg mb-2'>
            <Link 
              to='/section/0/chapter/0'
              className={`py-1 px-2 block ${getLinkClass('/section/0/chapter/0')}`}
              onClick={() => handleLinkClick('/section/0/chapter/0')}
            >
              Introduction
            </Link>
          </li>
          <li className='font-semibold text-lg mb-2'>The Newbie Trail</li>
          <ul className='ml-4 mb-4'>
            {chapters['1'].map((chapterText, index) => (
              <li key={index} className='py-1'>
                <Link
                  to={`/section/1/chapter/${index + 1}`}
                  className={`py-1 px-2 block ${getLinkClass(`/section/1/chapter/${index + 1}`)}`}
                  onClick={() => handleLinkClick(`/section/1/chapter/${index + 1}`)}
                  onMouseEnter={(e) => e.target.classList.add('bg-slate-700')}
                  onMouseLeave={(e) => e.target.classList.remove('bg-slate-700')}
                >
                  {chapterText}
                </Link>
              </li>
            ))}
          </ul>
          <li className='font-semibold text-lg mb-2'>The Intermediate Path</li>
          <ul className='ml-4 mb-4'>
            {chapters['2'].map((chapterText, index) => (
              <li key={index} className='py-1'>
                <Link
                  to={`/section/2/chapter/${index + 1}`}
                  className={`py-1 px-2 block ${getLinkClass(`/section/2/chapter/${index + 1}`)}`}
                  onClick={() => handleLinkClick(`/section/2/chapter/${index + 1}`)}
                  onMouseEnter={(e) => e.target.classList.add('bg-slate-700')}
                  onMouseLeave={(e) => e.target.classList.remove('bg-slate-700')}
                >
                  {chapterText}
                </Link>
              </li>
            ))}
          </ul>
          <li className='font-semibold text-lg mb-2'>The Advanced Quest</li>
          <ul className='ml-4 mb-4'>
            {chapters['3'].map((chapterText, index) => (
              <li key={index} className='py-1'>
                <Link
                  to={`/section/3/chapter/${index + 1}`}
                  className={`py-1 px-2 block ${getLinkClass(`/section/3/chapter/${index + 1}`)}`}
                  onClick={() => handleLinkClick(`/section/3/chapter/${index + 1}`)}
                  onMouseEnter={(e) => e.target.classList.add('bg-slate-700')}
                  onMouseLeave={(e) => e.target.classList.remove('bg-slate-700')}
                >
                  {chapterText}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    
    </div>
  );
};

export default Sidebar;
