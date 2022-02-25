import React from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeMsg}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <button onClick={props.closeMsg} className={classes['cross-icon']}><FontAwesomeIcon icon={faXmark} /></button>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
      <React.Fragment>
          {ReactDom.createPortal(<Backdrop closeMsg={props.closeMsg} />, portalElement)}
          {ReactDom.createPortal(
            <ModalOverlay closeMsg={props.closeMsg} closeMsg={props.closeMsg}>{props.children}</ModalOverlay>, 
            portalElement
          )}
      </React.Fragment>
  )
}

export default Modal