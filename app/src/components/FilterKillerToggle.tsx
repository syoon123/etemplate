import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { CustomButtonCallback } from '../App';

export type FilterKillerToggleProps = {
  checked: boolean;
  onChange: CustomButtonCallback;
};

function FilterKillerToggle(props: FilterKillerToggleProps) {
  return (
    <ButtonGroup toggle className="mb-2">
      <ToggleButton
        type="checkbox"
        variant={props.checked ? 'success' : 'danger'}
        checked={props.checked}
        value="1"
        onChange={props.onChange}
      >
        {props.checked ? 'Filter Killer ON' : ' Filter Killer OFF'}
      </ToggleButton>
    </ButtonGroup>
  );
}

export default FilterKillerToggle;
