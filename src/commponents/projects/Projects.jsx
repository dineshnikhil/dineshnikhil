import React from 'react'
import ProjectCard from './ProjectCard';
import classes from './Projects.module.css'

//importing the project data from data file.
import projectsData from '../store/projects/projectsData'


function Projects() {
  return (
    // PROJECTS MAIN SECTION
    <div id='projects' className={classes['projects-main-div']}>
        {/* SECTION HEADING */}
        <h1 className='text-[2rem] sm:text-5xl'>.projects(<span className='text-[#682AE9]'>'selected'</span>)</h1>
        {/* INNER SECTION */}
        <div className='py-4 mt-4 sm:py-12'>
            <div className='flex snap-x overflow-x-auto space-x-8 py-4 px-8 scroll-auto sm:px-80'>
                {projectsData.map(project => {
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects