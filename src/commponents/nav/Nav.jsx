import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import classes from './Nav.module.css';

function Nav(props) {
  return (
    <nav className={classes.nav}>
      {/* SECTION ONE */}
        <div className={classes['nav-one-div']}>
            <h1 className={classes.brand}>DineshNikhil</h1>
        </div>
        {/* SECTION TWO */}
        <div className={classes['nav-two-div']}>
            <ul className={classes['nav-list']}>
                <a href='#about'><li className={classes['nav-link']}>.about()</li></a>
                <a href='#skills'><li className={classes['nav-link']}>.skills()</li></a>
                <a href='#projects'><li className={classes['nav-link']}>.work()</li></a>
                <a href='#contact'><li className={classes['nav-link']}>.contact()</li></a>
            </ul>
            {/* EXTRA FEATURES LINKS AND BUTTONS */}
            <a><FontAwesomeIcon className={classes['nav-social-link']} icon={faLinkedinIn} /></a>
            <a><FontAwesomeIcon className={classes['nav-social-link']} icon={faGithub} /></a>
            <button onClick={props.showNav}><FontAwesomeIcon className={classes['hamberger']} icon={faGripLines} /></button>
        </div>
    </nav>
  )
}

export default Nav