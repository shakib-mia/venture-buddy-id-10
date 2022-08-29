import React from 'react'

const Currently = ({setexplore,explore}) => {
  return (
    <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
        <h1 className='fs-1'>Currently there are no investment done</h1>
        <p className='fs-2'>What are you waiting for start Investing</p>
        <button className='btn btn-cur' onClick={()=>setexplore(!explore)} >Start Explore</button>
      
    </div>
  )
}

export default Currently
