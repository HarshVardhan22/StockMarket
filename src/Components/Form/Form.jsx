import React, { useState } from 'react'
import styles from './Form.module.css'
                          
const Form = ({getReturns, getNetValue}) => {
    const [purchasePrice,setPurchasePrice] = useState();
    const [currentPrice,setCurrentPrice] =useState();
    const [quantity,setQuantity] =useState();

   const handlePurchasePrice = (e) => {
    setPurchasePrice(e.target.value)
   }
   const handleCurrentPrice = (e) => {
    setCurrentPrice(e.target.value)
   }
   const handleQuantity = (e) => {
    setQuantity(e.target.value)
   }

   const handleSubmit=(e)=>{
       e.preventDefault();
       let netProfitLoss =Math.abs(purchasePrice-currentPrice)*quantity;
       let percentage = (currentPrice-purchasePrice)/purchasePrice*100;
       getReturns(percentage);
       getNetValue(netProfitLoss);   
       setCurrentPrice(0);
       setPurchasePrice(0);
       setQuantity(0);
   }

    return (
       <form onSubmit={handleSubmit} className = {styles.container}>        
         
           
           <input type="number" name="purchasePrice" placeholder="Enter Purchase Price" required value = {purchasePrice} onChange={handlePurchasePrice} />

           <input type="number" name="currentPrice" placeholder="Enter Current Price" required value={currentPrice} onChange={handleCurrentPrice}/>

           <input type="number" name="purchaseQuantity" placeholder="Enter Purchase Quantity" value={quantity} required onChange={handleQuantity}/>

           <button>Submit</button>
       </form>
    )
}

export default Form
