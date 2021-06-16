import "../styles/app.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventoryFromFirebase } from "../redux/actions/inventoryAction";
import { useEffect } from "react";
import Nav from "./Nav";
import AddInventory from "./AddInventory";
import DisplayInventory from "./DisplayInventory";
import Category from "./Category";

function App() {
    const dispatch = useDispatch();
    const { validated } = useSelector((state) => state.userState);
    const { open } = useSelector((state) => state.inventoryState);

    useEffect(() => {
        dispatch(fetchInventoryFromFirebase("/inventory/"));
    // eslint-disable-next-line
    }, []);

    return (
        <>
            <Nav />
            {validated ? (
                <div className="container">
                    <Category />
                    <DisplayInventory />
                </div>
            ) : null}
            {open ? <AddInventory /> : null}
        </>
    );
}

export default App;
