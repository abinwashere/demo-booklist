import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme? light : dark;
  const {books} = useContext(BookContext);

  return ( 
    <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
      <ul>
        {books.map((b)=>{
          return (
            <li style={{background: theme.ui}} key={b.id}>{b.title}</li>
          )
        })}        
      </ul>
    </div>
   );
}

 
export default BookList;