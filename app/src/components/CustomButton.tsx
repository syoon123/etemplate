import React from 'react';
import { CustomButtonCallback } from '../App';
import Button from 'react-bootstrap/Button';

type CustomButtonProps = {
  label: string;
  action: CustomButtonCallback;
  className: string;
  isHidden: boolean;
  secondary: boolean;
};

export default function CustomButton(props: CustomButtonProps) {
  if (props.isHidden) {
    return;
  }
  return (
    <Button
      variant={props.secondary ? 'secondary' : 'primary'}
      className={props.className}
      onClick={props.action}
      block
    >
      {props.label}
    </Button>
  );
}
