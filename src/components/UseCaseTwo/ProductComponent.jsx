import { useState } from "react";

export function ProductComponent(props) {

    const { name, quantity: productQuantity, id } = props.product;

    const [productName, setProductName] = useState(name)
    const [quantity, setQuantity] = useState(productQuantity)

    const badgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += (quantity === 0) ? 'danger' : 'warning';
        return classes;
    }

    const formatQuantity = () => quantity === 0 ? 'Zero' : quantity

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const handleRemoveFromCart = () => {
        props.onRemove(id);
    }


    return (
        <div>
            <h4>{productName}</h4>
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