import React from 'react';
import { Link } from 'react-router-dom';


function Doctorlist(props) {
  return (
    <>
      <li className='doc__item'>
        <Link className='doc__item__link' to={props.path}>
          <figure className='doc__item__pic-wrap' data-category={props.label}>
            <img
              className='doc__item__img'
              alt='Write Image'
              src={props.src}
            />
          </figure>
          <div className='doc__item__info'>
            <h6 className='doc__item__text'>{props.text}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Doctorlist;