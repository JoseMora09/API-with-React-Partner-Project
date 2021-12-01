import React from 'react';

const NewSingle = ({item}) => (

<ul className="collection">
    <li className="collection-item">
      <span className="title">{item.name}</span>
      <p>ID:  {item.category_id} 
      </p>
    </li>
  </ul>
);

export default NewSingle;
