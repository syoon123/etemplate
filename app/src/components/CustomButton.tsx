import React from 'react';
import { CustomButtonCallback } from '../App';
import Button from 'react-bootstrap/Button';

type CustomButtonProps = {
  label: string;
  action: CustomButtonCallback;
  variant: 'primary' | 'secondary' | 'danger' | 'link';
  className?: string;
  size?: 'sm' | 'lg';
  isHidden?: boolean;
};

export default function CustomButton(props: CustomButtonProps) {
  if (props.isHidden) {
    return;
  }
  return (
    <Button
      variant={props.variant}
      className={props.className}
      onClick={props.action}
      size={props.size}
      block
    >
      {props.label}
    </Button>
  );
}
