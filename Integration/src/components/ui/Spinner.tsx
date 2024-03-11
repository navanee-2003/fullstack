import React from 'react'
import { PuffLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <PuffLoader size={40}/>
    </div>
  )
}

export default Spinner
