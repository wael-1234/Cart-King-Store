import React from "react";
import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { addCart, delCart } from "../../redux/action";
import { useDispatch } from "react-redux";
import './Cart.css'

function Cart() {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  
  const addProduct = (product) =>{
      dispatch(addCart(product));
  }
  const delProduct = (product)=>{
    dispatch(delCart(product));
}

  const productsNumber =()=>{
    let message=null;
    switch (state.length) {
      case 0: message="You have no product in your cart"
        break;
      case 1: message="You have only one product in your cart"
        break;
      default: message=`You have ${state.length} products in your cart`
        break;
    }
    return(message)
  }

  const TotalArticle=(a,b)=>{
    let total=a*b;
     return (Math.round(total * 100) / 100)
    }

  const TotalCart=()=>{
    let total=0;
    state.map((item)=>{
      total=total+item.price*item.qty;
      return (total)})
    return (Math.round(total * 100) / 100);
  }



  return (
    <div className="container mt-5 p-3 rounded cart ">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="d-flex flex-row align-items-center"  style={{marginTop:"-6%"}}>
            <NavLink to="/Products">
            <i className="fa fa-long-arrow-left me-2"></i>
            <span className="md-2">Continue Shopping</span>
            </NavLink>
          </div>
        </div>
      </div>
      <hr/>
      <h6 class="mb-0">Shopping cart</h6>
      <div class="d-flex justify-content-between">
        <span> {productsNumber()}</span>
        {/* <div class="d-flex flex-row align-items-center">
          <span class="text-black-50 me-2">Sort by:</span>
          <div class="price ml-2">
            <span class="mr-1">price</span>
            <i class="fa fa-angle-down"></i>
          </div>
        </div> */}
      </div>
      
      {state.map((item)=>{
         return (
          <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded" >
            <div className="d-flex flex-row">
              <img className="rounded me-5" src={item.image} width="40" />
              <div className="ml-2">
                <span className="font-weight-bold d-block" style={{width:"80%"}}>{item.title.substring(0, 30)}..</span>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <span className="d-block ml-5 font-weight-bold me-5">${item.price}</span>
              <button type="button" className="btn btn-outline-dark  btn-floating me-3" style={{borderRadius:"17px"}} onClick={()=>addProduct(item)}>
                <i class="fa fa-plus"></i>
              </button>
              <span className="d-block me-3">
                <h4>{item.qty}</h4>
              </span>
              <button type="button" className="btn btn-outline-dark btn-floating me-4" style={{borderRadius:"17px"}} onClick={()=>delProduct(item)}>
                <i class="fa fa-minus"></i>
              </button>
            
            </div>
            <h1>${TotalArticle(item.price,item.qty)}</h1>
          </div>
        )
      })}
      <div className="d-flex justify-content-around  mt-3 p-3" style={{marginLeft:'35%'}}>
        <h1>Total :{TotalCart()}</h1>
        <NavLink to="/Products" style={{marginLeft:'50px',textDecoration:'none'}}>
            <span className="md-2 me-4">Continue to payement</span>
            <i className="fa fa-long-arrow-right me-2"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
