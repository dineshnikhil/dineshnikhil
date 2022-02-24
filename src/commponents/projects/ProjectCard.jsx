import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProjectCard(props) {
  return (
    <div className='w-[300px] px-8 py-8 flex-shrink-0 snap-center bg-[#0b090a] rounded-md sm:snap-center sm:w-[600px] sm:py-14'>
        <h1 className='text-[#682AE9] text-2xl mb-4 font-semibold'>{props.project.name}</h1>
        <p className='text-[#797A7A] mb-6'>
            {props.project.info}
        </p>
        <a href={props.project.url} target="_blank">
            <button className='w-full px-14 py-2 text-black font-semibold rounded-md bg-[#682AE9] mb-2 hover:bg-white'>Vist Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
        </a>
        <a href={props.project.codeUrl} target="_blank" >
            <button className='w-full px-14 py-2 text-black font-semibold rounded-md bg-[#682AE9] hover:bg-white'>View Code <FontAwesomeIcon icon={faGithub} /></button>
        </a>
    </div>
  )
}

export default ProjectCard;