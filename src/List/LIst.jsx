import PropTypes from 'prop-types';
import generateId from '../tools/idRandomize'
import { Item, ListItems } from './List.styled'

export default function List({ getFilterContacts, hendleContactRemoveProp }) {
    const list =
        <ListItems>
            {getFilterContacts.length !== 0 && getFilterContacts.map(item =>
                <Item key={generateId()}><p>{item.name}: {item.phone}</p><button type='button' id={item.id} onClick={hendleContactRemoveProp}>Delete</button></Item>)}
        </ListItems>
    return list;
}


List.propTypes = {
    hendleContactRemoveProp: PropTypes.func,
    getFilterContacts: PropTypes.array,
}