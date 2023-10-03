import React from 'react';
import "./Copyrght.css"

const Copyright = () => {
  const year = new Date().getFullYear(); 

  return (
    <p className='copyright'>&copy; {year} fukune. All Rights Reserved.</p>
  );
}

export default Copyright;