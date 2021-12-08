import { useEffect, useState } from 'react';
import './main.css'
import {API_KEY, API_URl} from '../../config/api'
import Loader from '../loader/Loader';
import GoodsList from '../goods/GoodsList';

function Main() {

    const [ goods, setGoods ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (()=>{
        fetch(API_URl, {
            headers : {
                Authorization:API_KEY
            }
        })
        .then(res=>res.json())
        .then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false)
        })
    },[])

    return ( 
        <div className='container main'>
            {loading ? <Loader /> : <GoodsList goods={goods}/>}  
        </div>
     );
}

export default Main;