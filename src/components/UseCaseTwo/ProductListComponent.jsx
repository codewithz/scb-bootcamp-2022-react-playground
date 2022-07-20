import { useState } from "react";
import { ProductComponent } from "./ProductComponent";

export function ProductListComponent() {

    const productList = [
        { id: 1, name: 'Bread', quantity: 3 },
        { id: 2, name: 'Butter', quantity: 1 },
        { id: 3, name: 'Jam', quantity: 1 },
        { id: 4, name: 'Maggi', quantity: 4 },
        { id: 5, name: 'Eggs', quantity: 6 },
        { id: 6, name: 'Salt', quantity: 1 }
    ]

    const [products, setProducts] = useState(productList);

    const removeFromCart = (productId) => {
        const filteredProducts = products.filter(
            (product) => (product.id !== productId)
        );

        setProducts(filteredProducts)
    }

    const handleIncrement = (product) => {
        const productsClone = [...products];  //Making a copy of products which is in state.
        const index = productsClone.indexOf(product); //Give me the index of the product we are searching
        productsClone[index] = { ...product } // Taking the incoming product object and assigning it at the given index
        productsClone[index].quantity++; //Updating the quantity of the product in array by 1;

        setProducts(productsClone); //Updating the state with new copy of products in state

    }
    const handleDecrement = (product) => {
        const productsClone = [...products];  //Making a copy of products which is in state.
        const index = productsClone.indexOf(product); //Give me the index of the product we are searching
        productsClone[index] = { ...product } // Taking the incoming product object and assigning it at the given index
        productsClone[index].quantity--; //Updating the quantity of the product in array by 1;

        setProducts(productsClone); //Updating the state with new copy of products in state

    }

    return (
        <div>
            <ul>
                {
                    products.map((product) =>
                        // <li key={product.id}>{product.name} - {product.quantity}</li>
                        <ProductComponent
                            key={product.id}
                            product={product}
                            onRemove={removeFromCart}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                        // nameOfProp={actualValue}
                        />

                    )
                }
            </ul>
        </div>
    )
}