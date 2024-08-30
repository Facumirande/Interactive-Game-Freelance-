import { useState } from 'react';
import Inputs from '../helpers/Inputs';
import PropTypes from 'prop-types'; 
import { arrayImage } from '../helpers/inputsData';

const WritingExercise = (props) => {
  const { index, onValidStateChange } = props;
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    const validOptions = arrayImage[index].nombres.map(name => name.toLowerCase());
    const valid = validOptions.includes(value);
    setIsValid(valid);

    if (onValidStateChange) {
      onValidStateChange(valid);
    }
  };

  return (
    <div className="col-6">
      <Inputs
        index={index}
        value={inputValue}
        isValid={isValid}
        onChange={handleInputChange}
      />
    </div>
  );
};

WritingExercise.propTypes = {
  index: PropTypes.number.isRequired,
  onValidStateChange: PropTypes.func.isRequired,
};

export default WritingExercise;

