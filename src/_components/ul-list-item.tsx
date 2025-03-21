import React from 'react';
const UlListItem = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <li className='pl-2 before:content-["•"] before:text-Brown-800 before:inline-block before:mr-4 before:font-bold'>
        {children}
      </li>
    </>
  );
};

export default UlListItem;
