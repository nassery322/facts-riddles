import { Fragment, useState, useEffect } from 'react'
import Facts from './Facts';
import BlobButton from './UI/Button';
import './Welcome.css'
import Riddles from './Riddles';
const Welcome = props =>{
const [game, setGame] = useState(null)


  

useEffect(() => {
    if (props.navChange === 'riddles') {
    setGame(<Riddles />)
    } else if (props.navChange === 'facts') {
    setGame(<Facts />)
    }
    }, [props.navChange])
function factsHandler(){
setGame(<Facts />)
}
function riddlesHandler(){
setGame(<Riddles />)
}



    return <Fragment>
        <div className='welcome-message'>
           {game? game :
            <Fragment>
            Get rid of your bordem with over 100,000 intresting Facts and over 5,000 fun Riddles 
            <p >Click one of the options below to start having fun</p>
            <BlobButton onClick={factsHandler}>Facts</BlobButton> <BlobButton onClick={riddlesHandler}>Riddles</BlobButton>
            </Fragment>}
        </div>
    </Fragment>
}

export default Welcome;