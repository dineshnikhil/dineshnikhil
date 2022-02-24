import React from 'react'
// import workImg from '../images/work.svg'
import workImg from '../images/Binary code.gif'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes['home-main-div']} id="home">
      {/* SECTION ONE */}
        <div className={classes['home-one-div']}>
            <h1 className='text-5xl sm:text-5xl'>dinesh<span className='text-[#682AE9]'>.is()</span></h1>
            <h2 className='text-[#682AE9] mt-3 text-xl'>DINESH KUMAR POKKULA</h2>
            <h3 className='text-[#797A7A] text-lg mt-6 sm:text-2xl'>// Creative fullStack developer</h3>
        </div>
        {/* SECTION TWO */}
        <div className={classes['home-two-div']}>
            <img className={classes['home-img']} src={workImg} alt="working"/>
        </div>
    </div>
  )
}

export default Home