

const IngredientList = (props) => {
    return (
    <ul>
        {props.ingredient.map((item, index) => (
            <li key={index} style={{backgroundColor: item.color}}>
                {item.name}
                <button onClick={() => props.addToBurger(item)}>+</button>
            </li>
        ))}
    </ul>
    )
  };
  
  export default IngredientList;
  