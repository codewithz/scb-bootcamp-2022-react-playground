export function AlertComponent() {

    const handleAlert = () => {
        alert("SCB Alert!!")
    }

    return (
        <div>
            <button onClick={handleAlert}>Show Alert</button>
        </div>
    )
}