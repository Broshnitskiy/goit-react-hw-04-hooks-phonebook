import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ value, handleChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={handleChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
