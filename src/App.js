import React, {useState} from "react";
import "./style.css";
import data from './object'

export default function App() {
   const [filterd,setfilter] = useState(" ");

   const [cart, setcart] = useState([]);


   function filter1(e){
     const {value} = e.target;
     setfilter(value);
   }

   function addToCart(product){
    const productinCart = cart.find((ele)=> ele.id=== product.id);
    // for empty cart array this find method will not work.
 
if(productinCart){
        // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
        if(productinCart.quantity < productinCart.totalQuantity){
  setcart(cart.map((ele)=> ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity+1}: ele ))
        }
}else{
  // spread opertor helps to new object or data in existeing array
  // [...cart]
  setcart([...cart,{...product,quantity : 1}])
}
   }

   let filterItem = data.filter((ele) => ele.type.includes(filterd.toLowerCase()));

  return (
    <>
    <input type="text" onChange={filter1} /><br/><br/>
    {
      filterItem.length === 0 ?
      data.map((e)=>{
        return(
          <div>
               <div>id = {e.id}</div>
               <div>TYpe = {e.type}</div><br/>
               <button onClick={()=>addToCart(e)}>ADD</button><br/><br/>

            </div>
        )
      }):filterItem.map((e)=>{
        return(
          <div>
               <div>id = {e.id}</div>
               <div>TYpe = {e.type}</div><br/>
            </div>
        )
      })

    }

    <div>
      <h1> Cart is start</h1>
      {
      cart.length !==0 ?
      cart.map((e) => {
        return(
          <div>

               <div>id = {e.id}</div>
               <div>Type = {e.type}</div><br/>
               <div>Quantity = {e.quantity}</div>
               <button onClick={()=>addToCart(e)}>ADD</button><br/><br/>

            </div>
        )
      }):null
    }
    </div>
    </>
  );
}
