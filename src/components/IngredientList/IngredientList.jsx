import Ingredient from "../Ingredient/Ingredient.jsx";

const IngredientList = (props) => {
    return (
    <>
    <ul>
    <h2>{props.title}</h2>
        {props.ingredient.map((item, index) => (
            <Ingredient
            key={index}
            item={item}
            addOn={() => props.addToBurger(item)}
            inStack={false}
            />
        ))}
    </ul>
    </>
    )
};
  
export default IngredientList;
  