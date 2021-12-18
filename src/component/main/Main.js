import { useEffect, useContext } from 'react';
import './main.css'
import {API_KEY, API_URl} from '../../config/api'
import Loader from '../loader/Loader';
import GoodsList from '../goods/GoodsList';
import Card from '../card/Card';
import CardList from '../card/CardList';
import { ShopContext } from '../../contexts';

function Main() {

    const { setGoods, goods, loading } = useContext(ShopContext)
    
    useEffect (()=>{
        fetch(API_URl, {
            headers : {
                Authorization:API_KEY
            }
        })
        .then(res=>res.json())
        .then(data => {
            data.featured && setGoods(data.featured);
        })
        .catch((err)=>{
            setGoods(err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return ( 
        <div className='container main'>
            <CardList />
            <Card />
            {loading ? <Loader /> : <GoodsList goods={goods} />}  
        </div>
     );
}

export default Main;