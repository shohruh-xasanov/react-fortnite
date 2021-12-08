import {useEffect, useState} from 'react'

export default function useLocalStorage (state, key) {
    const get = () => {
        const storage = localStorage.getItem(key);
        return storage ? +storage : state
    }
    const [value, setValue] = useState(get)

    useEffect (() => {
        localStorage.setItem(key, value)
    }, [value])

    return [value, setValue]
}