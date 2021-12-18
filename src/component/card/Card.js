import { useContext } from "react";
import { ShopContext } from "../../contexts";

function Card() {
    const {order, addModal} = useContext(ShopContext)

    return ( 
        <div className="cart white-text blue darken-4 waves-effect waves-light">
            <i className="material-icons" onClick={addModal}>add_shopping_cart</i>
            { order.length ? <span className="cart-quantity">{order.length}</span> : null}
        </div>
     );
}

export default Card;