import { useState } from 'react'
import './App.css'
import HomeScreen from './Screens/HomeScreen'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import PostScreen from './Screens/PostScreen';
import Posts from './Screens/Posts'
import PostInsert from './Screens/PostInsert';


function App() {
  return (
    <BrowserRouter>
      <header className='headerContainer'>
        <div className='headerBox'>
          <h1 className='text-header'>FÓRUM</h1>
        </div>
        <nav className='routes'>
          <a href='/'>Home</a>
          <a href='/posts'>Posts</a>
          <a href='/postinsert'>New Post</a>
        </nav>
      </header>

      <main>
        
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/postinsert' element={<PostInsert/>}/>
          </Routes>
        
      </main>
    </BrowserRouter>
    
    
  )
}

export default App
