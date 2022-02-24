import React from 'react'
import contactImage from '../images/Connected world.gif';
import classes  from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    //   CONSTACT MAIN SECTION
    <div className={classes['contact-main-div']} id="contact">
        {/* SECTION HEADING */}
        <h1 className='text-[2rem] sm:text-5xl'>.contact()</h1>
        {/* PARENT SECTION */}
        <div className='px-4 py-8 mt-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='text-[#797A7A] p-4 sm:p-12'>
                    <img className={classes['contact-img']} src={contactImage} alt="" srcset="" />
                </div>
                <div className='px-2 py-8 sm:px-8 sm:py-24'>
                    <form>
                        <input type="text" className={classes['contact-input']} placeholder="FullName"/>
                        <input type="email" placeholder="Email" className={classes['contact-input']}/>
                        <button className='w-full px-14 py-2 text-black font-semibold rounded-md bg-[#682AE9] hover:bg-white mt-8'>send <FontAwesomeIcon icon={faPaperPlane} /></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact