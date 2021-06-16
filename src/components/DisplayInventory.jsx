import "../styles/displayInventory.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromFirebase } from "../redux/actions/inventoryAction";

function DisplayInventory() {
    const dispatch = useDispatch();
    const { inventory, selected } = useSelector(
        (state) => state.inventoryState
    );
    
    const deleteHandler = (item) => {
        dispatch(removeItemFromFirebase(`inventory/${selected}/${item.replaceAll(' ', '-')}`));
    }

    if(!inventory[selected]) {
        return null;
    }

    return (
        <div className="inventories">
            {Object.entries(inventory[selected]).map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="look">
                            <img src={item[1].image} alt="item" />
                        </div>
                        <h3>{item[1].name}</h3>
                        <p>{item[1].description}</p>
                        <p>{`Price: $${item[1].price}`}</p>
                        <p>{`Quantity: ${item[1].quantity}`}</p>
                        <h5 className="delete" onClick={() => deleteHandler(item[1].name)}>DELETE</h5>
                    </div>
                );
            })}
        </div>
    );
}

export default DisplayInventory;
