

 function GoodsItem(props) {
    const { id, full_background, name, description, addOrder,price} = props
    return (
        <div className="card" id={id} onClick={addOrder}>
            <div className="card-image">
            <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">
                    {name}
                </span>
                <p>
                    {description}
                </p>
            </div>
            <div className="card-action"> 
                <button className="btn waves-effect waves-light blue darken-4" >Buy</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price}$</span>
            </div>
        </div>
      );
}

export default GoodsItem;