import React from 'react'
import skillsImage from '../images/Creativity2.gif'
import classes from './Skills.module.css';

function Skills() {
  return (
    //   SKILLS MAIN SECTION
    <div id='skills' className={classes['skills-main-div']}>
        {/* SECTION HEADING */}
        <h1 className='text-[2rem] sm:text-5xl'>.skills(<span className='text-[#682AE9]'>...types</span>)</h1>
        {/* PARENT SECTION */}
        <div className={classes['skills-parent-div']}>
            {/* CHILD ONE SECTION */}
            <div className={classes['skills-one-div']}>
                {/* GRADCHILD ONE SECTION */}
                {/* GRANDCHILD TWO SECTION */}
                <div className={classes['skills-one-two-div']}>
                    types = [<br />
                        &emsp;&emsp;<span className='text-[#682AE9]'>frontend</span>,<br />
                        &emsp;&emsp;<span className='text-[#682AE9]'>backend</span>,<br />
                        &emsp;&emsp;<span className='text-[#682AE9]'>pro-lang</span>,<br />
                        &emsp;&emsp;<span className='text-[#682AE9]'>design</span><br />
                    ];
                </div>
                <div className={classes['skills-one-one-div']}>
                    <img src={skillsImage} alt="" srcset="" />
                </div>
            </div>
            {/* CHILD TWO SECTION */}
            <div className={classes['skills-two-div']}>
                {/* GRANDCHILD ONE SECTION */}
                <div>
                    <h1 className='text-xl font-semibold mb-2 sm:text-3xl sm:mb-4'>FrontEnd</h1>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>HTML5</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>CSS3</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>JavaScript</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>React.js</span>
                </div>
                {/* GRANDCHILD TWO SECTION */}
                <div className='mt-6 sm:mt-0'>
                    <h1 className='text-xl font-semibold mb-2 sm:text-3xl sm:mb-4'>BackEnd</h1>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>Node.js</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>Express.js</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>MongoDB</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>SQL</span>
                </div>
                {/* GRANDCHILD THREE SECTION */}
                <div className='mt-6'>
                    <h1 className='text-xl font-semibold mb-2 sm:text-3xl sm:mb-4'>ProgramingLanguages</h1>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>Python</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>java</span>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>C++</span>
                </div>
                {/* GRANDCHILD FOUR SECTION */}
                <div className='mt-6'>
                    <h1 className='text-xl font-semibold mb-2 sm:text-3xl sm:mb-4'>Design</h1>
                    <span className='text-[#797A7A] text-sm font-semibold mr-2 sm:text-lg sm:mr-4'>Figma</span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills