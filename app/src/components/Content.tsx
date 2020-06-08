import React from 'react';
import { ContentCallback } from '../App';
import Form from 'react-bootstrap/Form';

type ContentProps = {
  label: string;
  placeholder: string;
  action: ContentCallback;
  isLongText: boolean;
  isHidden: boolean;
};

export default function Content(props: ContentProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.action(evt.target.value);
  };
  if (props.isHidden) {
    return;
  }
  let formControl: any;
  if (props.isLongText) {
    formControl = (
      <Form.Control
        as="textarea"
        rows={10}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    );
  } else {
    formControl = (
      <Form.Control
        className="input"
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    );
  }

  return (
    <Form.Group>
      <Form.Label className="input-label">{props.label}</Form.Label>&nbsp;
      {formControl}
    </Form.Group>
  );
}