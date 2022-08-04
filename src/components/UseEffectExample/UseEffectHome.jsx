import { useState, useEffect } from "react"

export function UseEffectHome() {


    const [resourceType, setResourceType] = useState("posts");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => console.log(json))

        return () => {
            // Clean up code is written here

            console.log("Clean Up before the next iteration of useEffect")
        }
    }, [resourceType])



    return (
        <div>
            <p className="lead">Hello Use Effect</p>

            <button
                className="btn btn-primary m-2"
                onClick={() => setResourceType("posts")}
            >
                Posts
            </button>
            <button
                className="btn btn-warning m-2"
                onClick={() => setResourceType("users")}
            >
                Users
            </button>
            <button
                className="btn btn-success m-2"
                onClick={() => setResourceType("comments")}
            >
                Comments
            </button>
            <br />
            <br />
            <h3>{resourceType}</h3>



        </div>
    )
}