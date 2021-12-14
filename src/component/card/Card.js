function Card(props) {

    const {quantity, modal} = props
    return ( 
        <div className="cart white-text blue darken-4 waves-effect waves-light">
            <i className="material-icons" onClick={modal}>add_shopping_cart</i>
            { quantity ? <span className="cart-quantity">{quantity.length}</span> : null}
        </div>
     );
}

export default Card;