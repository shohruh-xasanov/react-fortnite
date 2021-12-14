import { useEffect, useState } from 'react';
import './main.css'
import {API_KEY, API_URl} from '../../config/api'
import Loader from '../loader/Loader';
import GoodsList from '../goods/GoodsList';
import Card from '../card/Card';
import CardList from '../card/CardList';
import { toast } from 'react-toastify';

function Main() {

    const [ goods, setGoods ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ order, setOrder ] = useState([])
    const [ modal, setModal ] = useState(false)
    
    
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
        .catch((err)=>{
            setGoods(err);
            setLoading(false)
        })
    }, [])

    function addOrder (props){
        let products= [];
        const index = order.findIndex(item => item[0].id === props.id)
        if(index < 0){
            products.push(props)
            setOrder([...order,products])
            toast.success('Product add to cart')
        }else{
            toast.error('Product is already added')
            return
        }
    }

    const addModal = () => {
        setModal(!modal)
    }

    const removeOrder = (id) => {
        const newArr = order.filter(item => item[0].id !== id);
        setOrder(newArr)
    }

    return ( 
        <div className='container main'>
            <CardList modal={[modal, addModal]} order={order} removeOrder= {removeOrder}/>
            <Card quantity={order} modal={addModal}/>
            {loading ? <Loader /> : <GoodsList goods={goods} addOrder={addOrder}/>}  
        </div>
     );
}

export default Main;