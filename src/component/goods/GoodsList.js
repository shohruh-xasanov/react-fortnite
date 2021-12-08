import GoodsItem from "./GoodsItem";

function GoodsList({goods = []}) {

    if(!goods.length){
        return (
            <h1>Hech qanday malumot yo'q</h1>
        )
    }

    return (
        <div className="goods" >
            { goods.map(item => (
                 <GoodsItem key={item.id}  {...item}/>
            ))
            }
        </div>
     );
}

export default GoodsList