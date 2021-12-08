import { useEffect, useRef } from 'react'


export default function usePrevious (value) {
    const ref = useRef(+localStorage.getItem('count') -1) //1ga o'zgardi

    useEffect (()=>{
        ref.current = value
    })
    return ref.current
}
