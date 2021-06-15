import React from 'react';
import classes from './Buttons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


function Buttons({ handleClickPrev, handleClickNext }) {
  return (
    <>
        <div onClick={handleClickPrev} className={classes.leftButton}>
            <FontAwesomeIcon icon={faChevronLeft} size='2x' />
        </div>
        <div onClick={handleClickNext} className={classes.rightButton}>
            <FontAwesomeIcon icon={faChevronRight} size='2x'  />
        </div>
    </>
  );
}
export default Buttons;