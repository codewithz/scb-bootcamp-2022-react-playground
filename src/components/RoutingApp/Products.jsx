import { useState } from "react";
import { Link } from "react-router-dom";

export function Products() {

    const productList = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' }
    ]

    const [products, setProducts] = useState(productList);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {
                    products.map(
                        (product) =>
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    {product.name}
                                </Link>
                            </li>
                    )
                }
            </ul>
        </div>
    )

}