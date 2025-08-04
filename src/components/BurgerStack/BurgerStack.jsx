

const BurgerStack = (props) => {
    return (
    <ul>
        {props.burgerStack.map((item, index) => (
            <li key={index} style={{backgroundColor: item.color}}>
                {item.name}
                <button onClick={() => props.removeFromBurger(index)}>x</button>
            </li>
        ))}
    </ul>
    )
  };
  
  export default BurgerStack;
  