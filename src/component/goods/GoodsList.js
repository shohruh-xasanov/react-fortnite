import GoodsItem from "./GoodsItem";

function GoodsList({goods = [], addOrder}) {

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