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


    return (
        <div>
            <ul>
                {
                    products.map((product) =>
                        // <li key={product.id}>{product.name} - {product.quantity}</li>
                        <ProductComponent key={product.id} product={product} />

                    )
                }
            </ul>
        </div>
    )
}