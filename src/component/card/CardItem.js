import { useState } from "react";

function CardItem(props) {

    const [value, setValue] = useState(1)

    const {item, removeOrder} = props
  
    const inc = () => {
      setValue(prev => prev + 1)
    }
    const dec = () => {
      if(value >1)setValue(prev => prev - 1)
    }

    return ( 
      <div>
          <ul class="collection" key={item.id}>
               <li class="collection-item avatar">
               <img src={item.full_background} alt={item.name} class="circle" />
                 <span class="title" style={{fontSize:'1.5rem'}}>{item.name}</span> <br />
                 <p style={{display:"inline-block", fontSize:"1.3rem"}}>{item.description}</p>
                 <p style={{display:"inline-block", fontSize:"1.3rem", marginLeft:'10px'}}>{item.price * value} <b>$</b> 
                 </p>
                 <p style={{display:'inline-block', fontSize:"1.3rem", marginLeft:'10px'}}>{value}ta</p>
                 <button className='btn' style={{position:"absolute", right:"250px", width:'100px', }} onClick={inc}>+</button>
                 <button className='btn' style={{position:"absolute", right:"100px", width:'100px', }} onClick={dec}>-</button>
                 <a href="#!" class="secondary-content "> 
                   <i class="material-icons " style={{color:"#0d47a1"}} onClick={()=>removeOrder(item.id)}>delete</i>
                 </a>
               </li>
            </ul>
      </div>
     );
}

export default CardItem;