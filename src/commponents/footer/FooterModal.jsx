import React from 'react'
import ReactDom from 'react-dom'
import classes from './FooterModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCloseStack}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <button onClick={props.onCloseStack} className={classes['cross-icon']}><FontAwesomeIcon icon={faXmark} /></button>
            <div className={classes.content}>
                <h1 className='text-[#682ae9] text-xl font-semibold mb-4'>Tech Stack used in this app!</h1>
                <h2 className='text-black font-semibold text-lg'>FrontEnd</h2>
                <h3 className='text-[#797a7a] font-semibold'>React.js</h3>
                <h3 className='text-[#797a7a] font-semibold'>Taillwind Css</h3>
                <h3 className='text-[#797a7a] font-semibold'>Fontawsome icons</h3>

                <h2 className='text-black font-semibold text-lg mt-4'>BackEnd</h2>
                <h3 className='text-[#797a7a] font-semibold'>...</h3>

                <h2 className='text-black font-semibold text-lg mt-4'>Others</h2>
                <h3 className='text-[#797a7a] font-semibold'>GitHub</h3>
            </div>
        </div>
    );
}

const portalElement = document.getElementById('overlays');

function FooterModal(props) {
  return (
    <React.Fragment>
        {ReactDom.createPortal(<Backdrop onCloseStack={props.onCloseStack}/>, portalElement)}
        {ReactDom.createPortal(
            <ModalOverlay onCloseStack={props.onCloseStack} />, portalElement
        )}
    </React.Fragment>
  )
}

export default FooterModal