import React from 'react';
import { CustomButtonCallback } from '../App';
import Button from 'react-bootstrap/Button';

type CustomButtonProps = {
  label: string;
  action: CustomButtonCallback;
  isHidden: boolean;
  class: string;
  isDisabled: boolean;
};

export default function CustomButton(props: CustomButtonProps) {
  if (props.isHidden) {
    return;
  }
  if (props.isDisabled) {
    return (
      <Button className={props.class} disabled>
        {props.label}
      </Button>
    );
  }
  return (
    <Button className={props.class} onClick={props.action}>
      {props.label}
    </Button>
  );
}
