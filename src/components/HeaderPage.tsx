import React from 'react'

export const  Header = () => {
  return (
    <header className='header' >
        <label  className='Core'>      
            Главная
        </label>
      <input className ='Input' type="checkbox" id="checkbox_toggle" />
        <label  className='Cotegory' htmlFor="checkbox_toggle">      
            Категории
        </label>
        <ul className ='Ul'>
          <h3>Авторские цитаты</h3>
          <h3 className='select'>Цитаты из книг</h3>
          <h3 className='select'>Цитаты из TV</h3>
        </ul>
    </header>
    
  )
}
