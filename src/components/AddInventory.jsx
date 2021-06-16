import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addInventoryToFirebase,
    toggleAddInventoryForm,
} from "../redux/actions/inventoryAction";
import "../styles/addInventory.css";

function AddInventory() {
    const name = useRef();
    const price = useRef();
    const description = useRef();
    const image = useRef();
    const quantity = useRef();

    const dispatch = useDispatch();
    const { selected } = useSelector((state) => state.inventoryState);

    const submitHandler = () => {
        if (
            name.current.value === "" ||
            price.current.value === "" ||
            description.current.value === "" ||
            image.current.value === "" ||
            quantity.current.value === ""
        ) {
            return;
        }

        if (isNaN(price.current.value) || isNaN(quantity.current.value)) {
            return;
        }

        dispatch(
            addInventoryToFirebase(
                `inventory/${selected}/${name.current.value.replaceAll(
                    " ",
                    "-"
                )}`,
                {
                    name: name.current.value,
                    price: price.current.value,
                    description: description.current.value,
                    image: image.current.value,
                    quantity: quantity.current.value,
                }
            )
        );
        dispatch(toggleAddInventoryForm());
    };

    return (
        <div className="add-inventory">
            <h3>{`Add ${selected}`}</h3>
            <input type="text" placeholder="name" ref={name} />
            <input type="text" placeholder="price" ref={price} />
            <input type="text" placeholder="description" ref={description} />
            <input type="text" placeholder="image" ref={image} />
            <input type="text" placeholder="quantity" ref={quantity} />
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}

export default AddInventory;
