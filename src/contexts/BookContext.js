import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    {title: 'name of the wind', id:1},
    {title: 'way of kings', id:2},
    {title: 'the final empire', id:3},
  ])
  return ( 
    <BookContext.Provider value={{books}} >
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;
