import { useParams } from "react-router-dom"

export function Posts() {

    const { year, month } = useParams()
    return (
        <div>
            <h2>Posts</h2>
            <p>Year: {year} </p>
            <p>Month: {month}</p>
        </div>
    )
}