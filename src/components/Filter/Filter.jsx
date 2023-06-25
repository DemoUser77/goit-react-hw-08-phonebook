import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/selectors';
import { setContactsFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectContactsFilter);

    const handleChangeFilter =({currentTarget:{value}}) => {
        const dataValue = value.toLowerCase().trim();
        dispatch(setContactsFilter(dataValue))
    };

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChangeFilter} />
            
        </Label>
    );

};
