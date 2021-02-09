
import React, { useEffect, useRef, useState } from 'react';

//otherprop?: (is opyional we reavh this using ?)
type TimerArgs = {
    milisegundos: number,
    otherprop?: number
}

export const Time = ( { milisegundos }: TimerArgs ) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>();


    useEffect( () => {
        ref.current && clearInterval( ref.current ); ///clean the setinterval using its ref
        ref.current = setInterval( () => setSegundos( s => s + 1 ) , milisegundos );
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{ segundos }</small></h4>
        </>
    )
}