
export function Contact ({contact, onDelItem}) {
    const {  name, number } = contact;
    return (
        <li >
            <p>{name} : {number}</p>
            <button type="button" onClick={onDelItem} >Delete</button>
        </li>
    )

}