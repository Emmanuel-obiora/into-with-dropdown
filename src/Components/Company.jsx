import React from 'react';

const Company = ({data}) => {
  return (
    <>
    {data && (

      <div className='company'>
        <ul>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
      </div>
    )}
    </>
  )
}

export default Company