import classes from './CartItem.module.css';



const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  
  function onAdd() {
    let item = {name: props.name, price: props.price, amount: Number(props.amount)+1};
    let index = -1;
    let i = 0;
    for (let cartItem of props.cart) {
      if (cartItem.name === item.name && cartItem.amount === item.amount) {
        index = i;
      }
      i++;
    }
    props.modify(prev => {
      let arr = prev;
      arr.shift(index, 1);
      arr.push(item)
      return [...arr];
    })

  }

  function onRemove() {
    let item = {name: props.name, price: props.price, amount: Number(props.amount)-1};
    let index = -1;
    let i = 0;
    for (let cartItem of props.cart) {
      if (cartItem.name === item.name && cartItem.amount === item.amount) {
        index = i;
      }
      i++;
    }
    props.modify(prev => {
      let arr = prev;
      arr.shift(index, 1);
      if (item.amount == 0) {
        return [...arr];
      }
      arr.push(item)
      console.log(arr);
      return [...arr];
    })

  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
