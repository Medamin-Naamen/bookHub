import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList.jsx/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import { AppProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}>
  <Route path='about' element={<About/>}/>
  <Route path='book' element={<BookList/>}/>
  <Route path='book/:id' element={<BookDetails/>}/>

  </Route>

  </Routes>
  </BrowserRouter>
  </AppProvider>
);


