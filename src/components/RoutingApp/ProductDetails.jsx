import { useParams, useHistory } from "react-router-dom"

export function ProductDetails(props) {

    const history = useHistory();
    console.log(props.match.params.id)

    const { id } = useParams();

    const handleSave = () => {
        //OPerations to save the product
        // Navigate to /products
        history.push("/products")
    }

    return (
        <div>
            <h2>Product Details - {id}</h2>
            <button
                onClick={handleSave}
                className="btn-warning btn-sm m-2">
                Save
            </button>
        </div>
    )
}