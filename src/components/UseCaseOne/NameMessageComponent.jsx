export function NameMessageComponent(props) {
    return (
        <div>
            Message from <b>{props.name}</b>: <i>{props.message}</i>
        </div>
    )
}