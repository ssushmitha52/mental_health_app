import React from 'react';
import { Link } from 'react-router-dom';


function Learnmore(props) {
  return (
    <>
      <li className='learn__item'>
        <Link className='learn__item__link' to={props.path}>
          <figure className='learn__item__pic-wrap' data-category={props.label}>
            <img
              className='learn__item__img'
              alt='Write Image'
              src={props.src}
            />
          </figure>
          <div className='learn__item__info'>
            <h6 className='learn__item__text'>{props.text}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Learnmore;