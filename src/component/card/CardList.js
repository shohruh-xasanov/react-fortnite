import { CardItem } from "..";

function CardList(props) {
    
    const {modal, order, removeOrder} = props

    let style ;
    let nimadir;
    if(modal[0]){
        style = {zIndex:"31", display:"block", opacity:1, bottom: 0};
        nimadir = "modal bottom-sheet open"
    }else{
        style = {zIndex:"31", display:"none", opacity:0, bottom: "-100%", transition: '0.7s'}
        nimadir = "modal bottom-sheet"
    }

    return ( 
        <>
        <div id="modal3" class={nimadir} tabindex="0" style={style}>
        <i class="medium material-icons right top" style={{cursor:"pointer", opacity: .8, marginTop:"17px", marginRight:"15px"}} onClick={modal[1]}>clear</i>
          <div class="modal-content">
            <h3 class="header">Maxsulotlar javali</h3>
           { order.length ? order.map(item=>(
               <CardItem  item={item[0]} removeOrder={removeOrder}/>
            )) : <h3 style={{textAlign:"center"}}>Savatcha bo'sh</h3>}
           </div>
         </div>
         {modal[0] ?<div class="modal-overlay" style={{zIndex: 30, display: "block", opacity: 0.5}}></div> : null}
         </>
     );
}

export default CardList;