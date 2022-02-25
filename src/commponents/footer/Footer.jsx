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
                <a href='https://www.instagram.com/dineshnikhil.dev/' target='_blank'><FontAwesomeIcon className={classes['footer-social-links']} icon={faInstagram} /></a>
                <a href='https://www.linkedin.com/in/dinesh-kumar-p-8677271a1/' target="_blank"><FontAwesomeIcon className={classes['footer-social-links']} icon={faLinkedinIn} /></a>
                <a href='https://github.com/dineshnikhil' target="_blank"><FontAwesomeIcon className={classes['footer-social-links']} icon={faGithub} /></a>
                </div>
            </div>
            <div>
                <h1>Useful Links</h1>
                <ul>
                    <a href='#home'><li>Home</li></a>
                    <a href='#about'><li>about</li></a>
                    <a href='#skills'><li>skills</li></a>
                    <a href='#projects'><li>projects</li></a>
                    <a href='#contact'><li>contact</li></a>
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