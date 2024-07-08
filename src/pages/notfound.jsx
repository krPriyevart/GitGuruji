import React from 'react'
import { Frown } from 'lucide-react';
import Layout from '../components/layout.jsx'
const NotFound = () => {
  return (
    
    <div className='mx-auto'>
      <Frown className='h-1/4 w-1/4 opacity-20' />
      <h1 className='text-7xl font-bold opacity-20 '>Page Not Found</h1>
    </div>
   
  )
}

export default NotFound
