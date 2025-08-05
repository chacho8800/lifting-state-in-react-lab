import Ingredient from "../Ingredient/Ingredient.jsx";

const BurgerStack = (props) => {
    return (
    <>
    {props.burgerStack.length ? (
    <ul>
        <h2>{props.title}</h2>
        {props.burgerStack.map((item, index) => (
            <Ingredient 
            key={index}
            item={item}
            onRemove={() => props.removeFromBurger(index)}
            inStack={true}
            />
        ))}
    </ul>
    ) : (
        <h2 className="no-ingredient">No Ingredient</h2>
    )}
    </>
    )
};

export default BurgerStack;
