import React from 'react'
import '../App.css';

export const  Aphorisms = () => {
  return (
    <div className='wrapper'> 
      <h1 className='Author'>Author</h1>
        <div className='wrapperAphorism'>
            <text className='Aphorism'>
              1dasdasdasdasdasdasdasdasddasdasdasdasdasd1dasdasdasdasdasdasdasdasddasdasdasdasdasd1dasdasdasdasdasdasdasdasddasdasdasdasdasd1dasdasdasdasdasdasdasdasddasdasdasdasdasd1dasdasdasdasdasdasdasdasddasdasdasdasdasd
            </text>
        </div>
      <div className='wrapperIcon'>
        <img className='iconlike' src={require('../assets/icon/like.png')} alt='like'/>
        <img className='iconCross' src={require('../assets/icon/cross.png')} alt='cross' />
      </div>
    </div>
  )
}

export default Aphorisms