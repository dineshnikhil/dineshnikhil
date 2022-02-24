import React from 'react'
import Modal from './Modal'
import Myphoto from '../images/Frame 8.jpg';

// importing the social links.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import classes from './WellcomeMsg.module.css';

function WellcomeMsg(props) {
  return (
    <Modal closeMsg={props.closeMsg}>
        <div className={classes['msg-main-div']}>
          <div className={classes['msg-one-div']}>
             <img src={Myphoto} alt="" />
          </div>
          <div className={classes['msg-two-div']}>
            <h1>Dinesh Kumar Pokkula</h1>
            <h2>Hey! it's sooo nice to see your here!</h2>
            <FontAwesomeIcon className={classes['msg-social-links']} icon={faGithub} />
            <FontAwesomeIcon className={classes['msg-social-links']} icon={faLinkedinIn} />
            <FontAwesomeIcon className={classes['msg-social-links']} icon={faInstagram} />
            <FontAwesomeIcon className={classes['msg-social-links']} icon={faTwitter} />
          </div>
        </div>
    </Modal>
  )
}

export default WellcomeMsg