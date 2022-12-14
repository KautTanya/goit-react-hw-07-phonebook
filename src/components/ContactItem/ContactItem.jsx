
import { useDispatch } from 'react-redux';
import {Item, Span, Button} from './ContactItem.styled'


import { deleteContact } from 'redux/operations';

export const ContactItem  = ({id, name, number}) => {
    const dispatch = useDispatch();
    return(
        <Item key = {id}>
            <Span>{name}</Span>
            <Span>{number}</Span>
            <Button  type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
        </Item>
    )
};
