import GoodsItem from "./GoodsItem";
import {useContext} from 'react'
import { ShopContext } from '../../contexts';

function GoodsList({goods = []}) {
    
    const {addOrder} = useContext(ShopContext)

    if(!goods.length){
        return (
            <h1>Hech qanday malumot yo'q</h1>
        )
    }

    return (
        <div className="goods" >
            { goods.map(item => (
                 <GoodsItem key={item.id}  {...item} addOrder={()=>addOrder({...item})}/>
            ))
            }
        </div>
     );
}

export default GoodsList