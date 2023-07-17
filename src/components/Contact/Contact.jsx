import PropTypes from "prop-types";

export function Contact ({contact, onDelItem}) {
    const {  name, number } = contact;
    return (
        <li >
            <p>{name} : {number}</p>
            <button type="button" onClick={onDelItem} >Delete</button>
        </li>
    )

}

Contact.propTypes = {
    contact: PropTypes.shape({
      name: PropTypes.string,
      number : PropTypes.string,
    }),
    onDelItem: PropTypes.func,
}