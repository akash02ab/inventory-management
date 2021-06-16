import "../styles/app.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventoryFromFirebase, toggleAddInventoryForm, updateSelection } from "../redux/actions/inventoryAction";
import Nav from "./Nav";
import AddInventory from "./AddInventory";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    const { validated } = useSelector((state) => state.userState);
    const { selected, open } = useSelector((state) => state.inventoryState);

    useEffect(() => {
        dispatch(fetchInventoryFromFirebase("/inventory/"));
    }, []);

    return (
        <>
            <Nav />
            {validated ? (
                <div className="container">
                    <div className="head">
                        <button onClick={() => dispatch(toggleAddInventoryForm())}>Add</button>
                        <ul>
                            <li
                                onClick={() => dispatch(updateSelection("mobiles"))}
                                className={
                                    selected === "mobiles" ? "selected" : ""
                                }
                            >
                                mobiles
                            </li>
                            <li
                                onClick={() => dispatch(updateSelection("laptops"))}
                                className={
                                    selected === "laptops" ? "selected" : ""
                                }
                            >
                                laptops
                            </li>
                            <li
                                onClick={() => dispatch(
                                    updateSelection("appliances")
                                )}
                                className={
                                    selected === "appliances" ? "selected" : ""
                                }
                            >
                                appliances
                            </li>
                        </ul>
                    </div>
                </div>
            ) : null}
            {open ? <AddInventory /> : null}
        </>
    );
}

export default App;
