import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import classes from './About.module.css';

// resume importing
import resume from '../images/Dinesh_Resume.pdf'

function About() {
  return (
    // PARENT SECTION
    <div className={classes['about-main-div']} id="about">
        {/* SECTION HEADING */}
        <h1 className='text-[2rem] sm:text-5xl'>.about()</h1>
        {/* NEXT TO PARENT DIV */}
        <div className={classes['about-main-next-div']}>
            {/* SECTION CHILD ONE */}
            <div className={classes['about-one-div']}>
                {/* SECTION CHILD TWO */}
                <div className={classes['about-two-div']}>
                    <a className='text-[#682AE9] text-3xl mr-6 font-light hover:text-white hover:cursor-pointer' href='https://www.linkedin.com/in/dinesh-kumar-p-8677271a1/' target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a className='text-[#682AE9] text-3xl font-light hover:text-white hover:cursor-pointer' href='https://github.com/dineshnikhil' target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                {/* SECTION CHILD THREE */}
                <div className={classes['about-three-div']}>
                    Download My <a href={resume} download><button className='rounded-md px-4 py-1 bg-[#682AE9] text-black font-semibold hover:bg-white ml-2 sm:ml-4 sm:px-8 sm:py-2'>Resume <FontAwesomeIcon icon={faFileArrowDown} /></button></a>
                </div>
            </div>
            <p className='mt-8 text-xl text-[#682AE9] sm:mt-12'>
                I am a creative fullstack developer, designer and illustrator. From Hydrabad, based in India.
            </p>
            <p className='mt-6 text-[#797A7A]'>
                // 3rd Year Computer Science Student
            </p>
        </div>
    </div>
  )
}

export default About;