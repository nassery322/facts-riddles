import { Fragment, useState, useRef } from 'react'
import './Riddles.css'
import BlobButton from './UI/Button'


const Riddles = props =>{
    const [riddle, setRiddle] = useState(null);
    const [answer, setAnswer] = useState('');
    const [styles, setStyles]= useState({});
    const [displayedAnswer, setDisplayedAnswer] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const inputRef = useRef();
    
   async function sentRequestHandler(){

    setDisabled(false)
    if (inputRef.current) { 
        inputRef.current.value = ''; 
    }
    setIsLoading(true)
    setDisplayedAnswer('')
    setStyles({})
        const response = await fetch('https://api.api-ninjas.com/v1/riddles', {
            method: 'get',
            headers: { 'X-Api-Key': "644svkDdOvGbw+ME/FphMw==rrkte6TpDpfQ0wG1" },
            contentType: 'application/json'
        })
        const data = await response.json();
        setRiddle(data[0].question)
        setAnswer(data[0].answer);
        setIsLoading(false)
    }
    function submitHandler(event) {
        setDisabled(true)
        event.preventDefault();
        if(inputRef.current.value.trim().length === 0){
            setStyles({'border': '1px solid red', 'background': 'rgb(229, 181, 181)'})
            setDisplayedAnswer(<Fragment><i className="fa-solid fa-xmark"></i>{answer}</Fragment>);
            return;
        }
        const input = inputRef.current.value.toLowerCase();
        const answerLower = answer.toLowerCase();
        if(answerLower.includes(input)){
            setStyles({'border': '1px solid green', 'background': 'rgb(195, 237, 205)'}) 
            setDisplayedAnswer(<Fragment><i className="fa-solid fa-check"></i>{answer}</Fragment>)
        }else{
            setStyles({'border': '1px solid red', 'background': 'rgb(229, 181, 181)'})
            setDisplayedAnswer(<Fragment><i className="fa-solid fa-xmark"></i>{answer}</Fragment>)
        }
    }
    return <Fragment>
        <div className='riddles'>
            <div className='riddle-section'>
            {riddle}
            </div>
            <BlobButton onClick={sentRequestHandler}>{isLoading? "Loading" : "Generate"}</BlobButton>

          {riddle &&  <div className='riddle-form'>
                <form>
                    <label htmlFor='name'>Your Answere:</label>
                    <input style={styles} ref={inputRef} type='text' id='inputfield' disabled={disabled}/>
                    <BlobButton  onClick={submitHandler} >Check</BlobButton>
                </form>
                <div className='answer'>{displayedAnswer}</div>
                
            </div>}
            
            
        </div>
    </Fragment>
}
 

export default Riddles;