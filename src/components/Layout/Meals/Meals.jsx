import classes from './Meals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const MealsSummary = () => {
    return (
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </section>
    );
  };

const AvailableMeals = (props) => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(meal => <MealItem name={meal.name} description={meal.description} price={meal.price} modify={props.modify}/>)}
                </ul>
            </Card>
        </section>
    )
}

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <Form add={add} modify={props.modify} name={props.name} price={props.price}/>
            </div>
        </li>
    )
}

function add(modify, name, price, event) {
    event.preventDefault();
    let amount = event.target.parentNode.childNodes[0].childNodes[1].value;
    let item = {name: name, price: price, amount: Number(amount)}
    modify(prev => {
        let arr = prev;
        for (let food of arr) {
            if (food.name == item.name) {
                food.amount += Number(amount);
                return [...arr];
            }
        }
        return [...prev, item]
    })
}

const Form = props => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={event => add(props.modify, props.name, props.price, event)}>+ Add</button>
        </form>
    )
}

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} />
        </div>
    )
}

const Card = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default function Meals(props) {
    return (
        <>
            <MealsSummary />
            <AvailableMeals modify={props.modify}/>
        </>
    )
}