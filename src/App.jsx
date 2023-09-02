import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Comments from './pages/Comments';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='posts' element={<Posts/>}/>
                <Route path='comments' element={<Comments/>}/>
                <Route path='*' element={<NotFound/>}/>
          </Route>
      </Routes>
    </div>
  );
};

export default App;