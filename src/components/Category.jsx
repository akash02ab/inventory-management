import "../styles/category.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddInventoryForm, updateSelection } from "../redux/actions/inventoryAction";

function Category() {
    const dispatch = useDispatch();
    const { selected } = useSelector((state) => state.inventoryState);
    return (
        <div className="head">
            <button onClick={() => dispatch(toggleAddInventoryForm())}>
                Add
            </button>
            <ul>
                <li
                    onClick={() => dispatch(updateSelection("mobiles"))}
                    className={selected === "mobiles" ? "selected" : ""}
                >
                    mobiles
                </li>
                <li
                    onClick={() => dispatch(updateSelection("laptops"))}
                    className={selected === "laptops" ? "selected" : ""}
                >
                    laptops
                </li>
                <li
                    onClick={() => dispatch(updateSelection("appliances"))}
                    className={selected === "appliances" ? "selected" : ""}
                >
                    appliances
                </li>
            </ul>
        </div>
    );
}

export default Category;
