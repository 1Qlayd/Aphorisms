import React, { useEffect, useState } from 'react'
import '../App.css';

export interface IAphorism{
  author: string;
  aphorism: string;
}
export const  Aphorisms = (props:IAphorism) => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

const changeLike = () => {
  if(like === 0)setLike(like+1); 
  if(like === 1) setLike(like-1); 
  if(dislike > 0) setDislike(dislike-1)
  localStorage.setItem('like',JSON.stringify(like))
}

const changeDislike = ()=>{
  if(dislike === 0)setDislike(dislike+1); 
  if(dislike === 1) setDislike(dislike-1); 
  if(like > 0) setLike(like-1)
}

  return (
    <div className='wrapper'> 
    {}
      <h1 className='Author'>{props.author}</h1>
        <div className='wrapperAphorism'>
            <text className='Aphorism'>
              {props.aphorism}
            </text>
        </div>
      <div className='wrapperIcon'>
        <img 
        className='iconlike' 
        src={require('../assets/icon/like.png')} 
        onClick={changeLike} 
        alt='like'/>
        <h2 className='count'>{like}</h2>

        <img 
        className='iconCross' 
        src={require('../assets/icon/cross.png')} 
        onClick={changeDislike} 
        alt='cross' />
        <h2 className='count'>{dislike}</h2>

      </div>
    </div>
  )
}

export default Aphorisms