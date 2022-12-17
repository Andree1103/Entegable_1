import React, { useState } from 'react';
import quotes from '../quotes.json'

const Quotes = () => {
    const ram = Math.floor(Math.random()* quotes.length)
    const [i, seti] = useState(ram)
    const changePhrase = () => {
        const newram = Math.floor(Math.random() * quotes.length)
        seti(newram)
    }
    const colors = ["#e5cf3b","#89c054","#34a772", "#008980", "#006877","#2f4858","#847655","#25316b","#767586","#007d59"]
    const randomcolor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomcolor]}; color:${colors[randomcolor]}`
    //document.getElementById('btn').style=`background: ${colors[randomcolor]}`
    return (
        <div className="App">
            <div className='contet'>
            <div className='comi'><i className="fa-solid fa-quote-left"></i></div>
            <div className='phare'><p>{quotes[i].quote}</p></div>
            </div>
            <h3 className='autor'>{quotes[i].author}</h3>
            <button className='btn_next' id='btn' onClick={changePhrase} style={{background: colors[randomcolor]}}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Quotes;