import { useState } from "react";

export function ProductComponent(props) {

    const { name, quantity: productQuantity, id } = props.product;

    // const [productName, setProductName] = useState(name)
    // const [quantity, setQuantity] = useState(productQuantity)

    const badgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += (productQuantity === 0) ? 'danger' : 'warning';
        return classes;
    }

    const formatQuantity = () => productQuantity === 0 ? 'Zero' : productQuantity

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    const handleIncrement = () => {
        props.onIncrement(props.product)
    }

    const handleDecrement = () => {
        props.onDecrement(props.product)
    }

    const handleRemoveFromCart = () => {
        props.onRemove(id);
    }


    return (
        <div>
            <h4>{name}</h4>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleIncrement}
            >
                +
            </button>
            <span style={styles} className={badgeClasses()}>{formatQuantity()}</span>
            <button
                className="btn btn-secondary btn-sm m-2"
                onClick={handleDecrement}
            >
                -
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-danger btn-sm m-2"
                onClick={handleRemoveFromCart}>
                Remove From Cart
            </button>
        </div>
    )
}