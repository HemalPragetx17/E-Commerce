/* eslint-disable eqeqeq */
import React from 'react'
import '../index.scss';

export const Pagination = ({ totalposts, postprepage, setcurrentpage, currentpage }) => {

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalposts / postprepage); i++) {
    pages.push(i)
  }
  return (
    <div className='pagination'>
      {pages.map((page, index) => {
        return (
          <>
            <button key={index} className={page == currentpage ? 'active' : ''} onClick={() => setcurrentpage(page)}>{page}</button>
          </>
        )
      })}
    </div>
  )
}

export default Pagination;