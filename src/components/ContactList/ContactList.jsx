// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from "components/ContactItem/ContactItem";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { List} from './ContactList.styled'
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const filtered = (contacts, filter) => {
  let filterContacts = null;
  if (filter === '') {
    filterContacts = contacts;
    return filterContacts;
  }
  const normalizedFilter = filter.toLowerCase();
  filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  if (filterContacts.length < 1) {
    Notify.warning('There are not contact in phonebook');
  }
  return filterContacts;
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
  const filter = useSelector(getFilter);
  const visibleContacts = filtered(items, filter.filter);
  return (
    <List>
      {visibleContacts.map(state => {
        console.log(state);
        return (
          <ContactItem
            name={state.name}
            key={state.id}
            number={state.phone}
            id={state.id}
          />
        );
      })}{' '}
    </List>
  );
};
