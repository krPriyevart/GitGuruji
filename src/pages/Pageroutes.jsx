import React from 'react';
import { useParams } from 'react-router-dom';
import Intro from './chapters/intro.jsx';
import Se1Ch1 from './chapters/Se1Ch1.jsx';
import Se1Ch2 from './chapters/Se1Ch2.jsx';
import Se1Ch3 from './chapters/Se1Ch3.jsx';
import Se1Ch4 from './chapters/Se1Ch4.jsx';
import Se1Ch5 from './chapters/Se1Ch5.jsx';
import Se1Ch6 from './chapters/Se1Ch6.jsx';
import Se1Ch7 from './chapters/Se1Ch7.jsx';
import Se2Ch1 from './chapters/Se2Ch1.jsx';
import Se2Ch2 from './chapters/Se2Ch2.jsx';
import Se2Ch3 from './chapters/Se2Ch3.jsx';
import Se2Ch4 from './chapters/Se2Ch4.jsx';
import Se2Ch5 from './chapters/Se2Ch5.jsx';
import Se3Ch1 from './chapters/Se3Ch1.jsx';
import Se3Ch2 from './chapters/Se3Ch2.jsx';
import Se3Ch3 from './chapters/Se3Ch3.jsx';
import Se3Ch4 from './chapters/Se3Ch4.jsx';
import Se3Ch5 from './chapters/Se3Ch5.jsx';
import Se3Ch6 from './chapters/Se3Ch6.jsx';
import Se3Ch7 from './chapters/Se3Ch7.jsx';
// import Se4Ch1 from './chapters/Se4Ch1.jsx';
// import Se4Ch2 from './chapters/Se4Ch2.jsx';
// import Se4Ch3 from './chapters/Se4Ch3.jsx';
// import Se4Ch4 from './chapters/Se4Ch4.jsx';
import NotFound from './notfound.jsx';

const Pageroutes = () => {
  const { sectionId, chapterId } = useParams();

  const renderChapterContent = () => {
    if (sectionId === '0' && chapterId === '0') return <Intro />;
    if (sectionId === '1' && chapterId === '1') return <Se1Ch1 />;
    if (sectionId === '1' && chapterId === '2') return <Se1Ch2 />;
    if (sectionId === '1' && chapterId === '3') return <Se1Ch3 />;
    if (sectionId === '1' && chapterId === '4') return <Se1Ch4 />;
    if (sectionId === '1' && chapterId === '5') return <Se1Ch5 />;
    if (sectionId === '1' && chapterId === '6') return <Se1Ch6 />;
    if (sectionId === '1' && chapterId === '7') return <Se1Ch7 />;
    if (sectionId === '2' && chapterId === '1') return <Se2Ch1 />;
    if (sectionId === '2' && chapterId === '2') return <Se2Ch2 />;
    if (sectionId === '2' && chapterId === '3') return <Se2Ch3 />;
    if (sectionId === '2' && chapterId === '4') return <Se2Ch4 />;
    if (sectionId === '2' && chapterId === '5') return <Se2Ch5 />;
    if (sectionId === '3' && chapterId === '1') return <Se3Ch1 />;
    if (sectionId === '3' && chapterId === '2') return <Se3Ch2 />;
    if (sectionId === '3' && chapterId === '3') return <Se3Ch3 />;
    if (sectionId === '3' && chapterId === '4') return <Se3Ch4 />;
    if (sectionId === '3' && chapterId === '5') return <Se3Ch5 />;
    if (sectionId === '3' && chapterId === '6') return <Se3Ch6 />;
    if (sectionId === '3' && chapterId === '7') return <Se3Ch7 />;
    // if (sectionId === '4' && chapterId === '1') return <Se4Ch1 />;
    // if (sectionId === '4' && chapterId === '2') return <Se4Ch2 />;
    // if (sectionId === '4' && chapterId === '3') return <Se4Ch3 />;
    // if (sectionId === '4' && chapterId === '4') return <Se4Ch4 />;
    return <NotFound />;
  };

  return (
    <div>
      {/* <h1>Section {sectionId}</h1>
      <h2>Chapter {chapterId}</h2> */}
      {renderChapterContent()}
    </div>
  );
};

export default Pageroutes;
