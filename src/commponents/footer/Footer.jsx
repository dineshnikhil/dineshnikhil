import React, { useState } from 'react'
import classes from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import FooterModal from './FooterModal'

function Footer() {

    const [showStack, setShowStack] = useState(false);

    function showStackHandler() {
        setShowStack(true)
    }

    function closeStackHandler() {
        setShowStack(false)
    }

  return (
    <React.Fragment>
        {showStack && <FooterModal onCloseStack={closeStackHandler}/>}
    <div className={classes.footer}>
        <div className={classes['footer-main-div']}>
            <div>
                <h2 className={classes['footer-brand']}>DineshNikhil</h2>
                <div>
                <FontAwesomeIcon className={classes['footer-social-links']} icon={faInstagram} />
                <FontAwesomeIcon className={classes['footer-social-links']} icon={faLinkedinIn} />
                <FontAwesomeIcon className={classes['footer-social-links']} icon={faGithub} />
                </div>
            </div>
            <div>
                <h1>Useful Links</h1>
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li>skills</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
        <div className={classes['footer-last']}>
            <h3>
                Do you want to know the technologies used to build this website
                <br />
                <button className='px-14 py-2 text-black font-semibold rounded-md bg-[#682AE9] hover:bg-white mt-4' onClick={showStackHandler}>
                    Know Stack
                </button>
            </h3>
            <hr />
            <h3>© dineshNikhil™ 2022 | All rights reserved.</h3>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Footer