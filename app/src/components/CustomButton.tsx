import React from 'react';
import { CustomButtonCallback } from '../App';
import Button from 'react-bootstrap/Button';

type CustomButtonProps = {
  label: string;
  action: CustomButtonCallback;
  isHidden: boolean;
  class: string;
};

export default function CustomButton(props: CustomButtonProps) {
  if (props.isHidden) {
    return;
  }
  return (
    <Button className={props.class} onClick={props.action}>
      {props.label}
    </Button>
  );
}
