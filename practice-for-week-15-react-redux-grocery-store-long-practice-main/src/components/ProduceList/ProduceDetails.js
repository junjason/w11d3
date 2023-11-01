import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { likeProduce } from "../../store/produce";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(produce.id));
  };


  const cartItem = {};

  const handlelikeProduce = (e) => {
    dispatch(likeProduce(produce.id));

  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")} onClick = {handlelikeProduce}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")} onClick={handleClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;