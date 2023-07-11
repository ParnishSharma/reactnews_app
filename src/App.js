import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Navbar />

      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} category='General' />} />
        <Route exact path='/business' element={<News setProgress={setProgress} key='business' category='Business' />} />
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key='Entertainment' category='Entertainment' />} />
        <Route exact path='/general' element={<News setProgress={setProgress} key='General' category='General' />} />
        <Route exact path='/health' element={<News setProgress={setProgress} key='Health' category='Health' />} />
        <Route exact path='/science' element={<News setProgress={setProgress} key='Science' category='Science' />} />
        <Route exact path='/sports' element={<News setProgress={setProgress} key='Sports' category='Sports' />} />
        <Route exact path='/technology' element={<News setProgress={setProgress} key='Technology' category='Technology' />} />

      </Routes>
      
    </div>
  );
};

export default App;
