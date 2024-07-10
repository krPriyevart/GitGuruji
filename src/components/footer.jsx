import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const chapters = {
  '1': ['Intro to Git & GitHub', 'Creating Account', 'Creating Repository', 'Installing Git', 'Configuring Git', 'Basic Commands', 'Git Commands'],
  '2': ['Git Branches', 'Git Stashing', 'Git Rebasing', 'Git Log', 'Git Diff'],
  '3': ['Interactive Rebase', 'Git Cherry-Pick', 'Git Bisect', 'Git Submodules', 'Git Hooks', 'Git Reflog', 'Git Worktrees']
};

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const allChapters = Object.keys(chapters).flatMap(section =>
    chapters[section].map((title, index) => ({
      section,
      title,
      chapterIndex: index + 1
    }))
  );

  const chapterChunks = chunkArray(allChapters, 5);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <div style={{fontFamily: "Changa"}} className='w-full h-96 bg-slate-800 flex px-10 py-10 justify-around leading-9 font-mono text-white text-lg'>
      {chapterChunks.map((chunk, chunkIndex) => (
        <ul key={chunkIndex}>
          {chunk.map(({ section, title, chapterIndex }) => (
            <li key={chapterIndex} className='py-2'>
              <Link
                to={`/section/${section}/chapter/${chapterIndex}`}
                onClick={() => handleLinkClick(`/section/${section}/chapter/${chapterIndex}`)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Footer;
