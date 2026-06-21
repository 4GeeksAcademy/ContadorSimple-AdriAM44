import React, { useState} from 'react';

const ContadorSimple = ()=>{
    
    const[backColor, setBackColor] = useState('grey')
    const[stopColor, setStopColor] = useState('grey')
    const[playColor, setPlayColor] = useState('grey')
    const[nextColor, setNextColor] = useState('grey')

    function Ant(){
        if( backColor == 'grey'){
            setBackColor('green')
            setStopColor('grey')
            setPlayColor('grey')
            setNextColor('grey')
        }else{
            setBackColor('grey')
        }
    }
    function Next(){
        if( nextColor == 'grey'){
            setNextColor('green')
            setStopColor('grey')
            setBackColor('grey')
            setPlayColor('grey')
        }else{
            setNextColor('grey')
        }
    }
    function Stop(){
        if( stopColor == 'grey'){
            setStopColor('green')
            setBackColor('grey')
            setPlayColor('grey')
            setNextColor('grey')
        }else{
            setStopColor('grey')
        }
    }
    function Play(){
        if( playColor == 'grey'){
            setPlayColor('green')
            setStopColor('grey')
            setBackColor('grey')
            setNextColor('grey')
        }else{
            setPlayColor('grey')
        }
    }
    return (
        <>
            <h1>Reproductor</h1>
            <button onClick={Ant}style={{backgroundColor: backColor}}>Ant</button>
            <button onClick={Next} style={{backgroundColor: nextColor}}>Next</button>
            <button onClick={Play}style={{backgroundColor: playColor}}>Play</button>
            <button onClick={Stop} style={{backgroundColor: stopColor}}>Stop</button>
        </>
    )
}

export default ContadorSimple