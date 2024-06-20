import React from 'react'
import './Home.css'
import PostScreen from './PostScreen'
import PostCard from '../components/postCard'

import Posts from './Posts'

export default function HomeScreen () {
  return (
    <div >
      
      <main className='main-container'>
        <div className='main-box'>
          <h1 className='text-main'>Posts</h1>
          <div className='post'>
            <Posts/>
          </div>
        </div>

      </main>
      <footer className='footer-container'>
        <div className='footer-box'>
          <span>Todos os direitos reservados 2024 © </span>
          <span>Desenvolvido por Gustavo Franco</span>
        </div>
      </footer>

    </div>
  )
  
}