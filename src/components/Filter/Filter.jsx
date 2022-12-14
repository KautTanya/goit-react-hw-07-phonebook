import { Input, Label } from './Filter.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { addFilter } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };
  return (
    <Label htmlFor='filter'>
      Find contacts by name
      <Input type="text" onChange={changeFilter} value={filter.filter}></Input>
    </Label>
  );
};

