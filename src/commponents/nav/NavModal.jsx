import React from 'react'
import classes from './NavModal.module.css'
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeNav}></div>
}

const NavModalOverlay = (props) => {
  return (
      <div className={classes.modal}>
          <button onClick={props.closeNav} className={classes['cross-icon']}><FontAwesomeIcon icon={faXmark} /></button>
          <div className={classes['nav-content']}>
              <ul>
                <a href='#home' onClick={props.closeNav}><li>Home</li></a>
                <a href='#about' onClick={props.closeNav}><li>About</li></a>
                <a href='#skills' onClick={props.closeNav}><li>Skills</li></a>
                <a href='#projects' onClick={props.closeNav}><li>Projects</li></a>
                <a href='#contact' onClick={props.closeNav}><li>Contact</li></a>
              </ul>
          </div>
      </div>
  );
};

const portalElement = document.getElementById('overlays');

function NavModal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop closeNav={props.closeNav} />, portalElement)}
      {ReactDom.createPortal(
        <NavModalOverlay closeNav={props.closeNav} />,
        portalElement
      )}
    </React.Fragment>
  )
}

export default NavModal