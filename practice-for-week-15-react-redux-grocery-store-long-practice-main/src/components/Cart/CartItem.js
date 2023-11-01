import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decrementInCart, removeFromCart } from '../../store/cart';


function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  
  const dispatch = useDispatch();


  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  

  const handleChangeNumber = (e) => {
    // setCount(e.target.value);
    let diff = e.target.value - item.count;
    for (let i =0;i < diff; i++) {
      dispatch(addToCart(item.id)); // write function 
    }
  }

  const incrementCart = (e) => {
    // setCount(count+1);
    dispatch(addToCart(item.id)); 
    
  }

  const decrementCart = (e) => {
    if (item.count <= 1) {
      dispatch(removeFromCart(item.id))
    }else {
    dispatch(decrementInCart(item.id))
    }
  }
  const removeinCart = (e) => {
    dispatch(removeFromCart(item.id))
  }


  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count} onChange={handleChangeNumber}
        />
        <button
          className="cart-item-button" onClick={incrementCart}
        >
          +
        </button>
        <button
          className="cart-item-button" onClick={decrementCart}
        >
          -
        </button>
        <button
          className="cart-item-button" onClick = {removeinCart}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;