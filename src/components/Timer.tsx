import React, {useState} from 'react'
import { Time } from './Time';

export const Timer = () => {
    
    const [millisegundos, setMillisegundos] = useState(1000);

    return (
        <>
            <span>Milisegundos { millisegundos }</span>

            <br/>

            <button className="btn btn-outline-success"
                    onClick={ () => setMillisegundos(1000) }>
                1000
            </button>

            <button className="btn btn-outline-success"
                    onClick={ () => setMillisegundos(2000) }>
                2000
            </button>


            <Time milisegundos={ millisegundos } />
        </>
    )
}