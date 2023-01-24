import { Fragment, useState } from 'react'
import './Facts.css'
import BlobButton from './UI/Button'

const Facts = props => {

    const [fact, setFact] = useState('')
    const [loading, setLoading] = useState(false);
    const [factData, setFactData] = useState(null);
    const [count, setCount] = useState(0)
    async function sentRequestHandler() {
        
         setCount(0)
        setLoading(true)
        const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=6', {
            method: 'get',
            headers: { 'X-Api-Key': "644svkDdOvGbw+ME/FphMw==rrkte6TpDpfQ0wG1" },
            contentType: 'application/json'
        })
        const data = await response.json();
        setFactData(data)
         setLoading(false)
        setFact(data[0].fact)
    
    }
    function nextHandler() {
        setCount(e => e = e + 1)
        
    }
    const Fact = factData ? factData[count].fact : fact
    
    const Button = !factData || count === 5 ? <BlobButton onClick={sentRequestHandler}>{loading ? 'Loading' : "Generate"}</BlobButton> : <BlobButton onClick={nextHandler}>{loading ? "Loading" : "Next"}</BlobButton>
    return <Fragment>
        <div className='facts-tab'>
            <div className='fact'>
                {Fact}
            </div>
            {Button}
        </div>
    </Fragment>
}

export default Facts;