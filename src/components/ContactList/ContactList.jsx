import { Contact } from "components/Contact/Contact";

export function ContactList({ list, onDeleteItem }) {
    return (
        list.map(item => {
            return <Contact key={item.id} contact={item} onDelItem={()=>onDeleteItem(item.id) } />
        })
    )
}