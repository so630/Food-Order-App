import classes from './Cart.module.css'
import Modal from '../../UI/Modal';
import CartItem from './CartItem';

export default function Cart(props) {
    const cartItems = <ul className={classes["cart-items"]}>{props.cart.map(item => <li><CartItem name={item.name} price={item.price} amount={item.amount} modify={props.modify} cart={props.cart} /></li>)}</ul>;
    let total = 0;
    for (let item of props.cart) {
        total += item.amount * item.price;
    }

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${total}</span>
            </div>
            <div className={classes.actions}>
                <button classname={classes['button--alt']} onClick={props.close}>Close</button>
                {props.cart.length > 0 && <button className={classes['button']} onClick={props.close}>Order</button>}
            </div>
        </Modal>
    )
}