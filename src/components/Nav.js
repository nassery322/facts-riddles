import React, { Fragment } from 'react'
import './Nav.css'
import logogreen from '../assets/logogreen.png'

const Navbar = props =>{

    function riddlesHandler(){
        props.onRiddles(true)
    }

    function factsHandler(){
        props.onFacts(true)
    }
    function reloadHandler(){
        window.location.reload()
    }

    return <Fragment>
        <div className='nav-bar'>
            <span className='nav-header'><img src={logogreen} onClick={reloadHandler} /></span>
            <span className='nav-links'>
            <span className='nav-link hover-underline-animation' onClick={factsHandler}>Facts</span>
            <span className='nav-link hover-underline-animation' onClick={riddlesHandler}>Riddles</span>
          </span>
        </div>
    </Fragment>
}


export default Navbar;