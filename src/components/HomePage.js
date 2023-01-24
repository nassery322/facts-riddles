import React, { Fragment, useState } from 'react'
import './HomePage.css'
import Navbar from './Nav';
import BlobButton from './UI/Button';
import Welcome from './Welcome';


const HomePage = props =>{
    const [navChange, setNavChange] = useState()
    function navBarChangeHandler(e){
        setNavChange('riddles')
    }
    function factsHandler(){
        setNavChange('facts')
    }
    return <Fragment>
        <div className='home-page'>
            <Navbar onRiddles={navBarChangeHandler} onFacts={factsHandler}/>
            <Welcome navChange={navChange}/>
            
        </div>
    </Fragment>
}


export default HomePage;