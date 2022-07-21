import { useParams } from "react-router-dom"

export function ProductDetails(props) {

    console.log(props.match.params.id)

    const { id } = useParams();

    return (
        <div>
            <h2>Product Details - {id}</h2>
            <button className="btn-warning btn-sm m-2">
                Save
            </button>
        </div>
    )
}