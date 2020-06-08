import React from 'react';
import { RecipientsCallback } from '../App';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

export type RecipientsProps = {
  label: string;
  action: RecipientsCallback;
  items: string[];
  existingItems: string[];
  isHidden: boolean;
};

export default function Recipients(props: RecipientsProps) {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const validEmail = new RegExp(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g);
  if (props.isHidden) {
    return;
  }
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', 'Tab', ','].includes(evt.key)) {
      evt.preventDefault();

      setValue(value.trim());

      if (value && isValid(value)) {
        setValue('');
        props.action([...props.items, value]);
      }
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    setError('');
  };

  const handleDelete = (item: string) => {
    props.action(props.items.filter((i) => i !== item));
  };

  const handlePaste = (evt: React.ClipboardEvent<HTMLInputElement>) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData('text');
    var emails = paste.match(validEmail);

    if (emails) {
      var toBeAdded = emails.filter((email) => !isInList(email));

      props.action([...props.items, ...toBeAdded]);
    }
  };

  function isValid(email: string) {
    let error = null;

    if (isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      setError(error);
      return false;
    }

    return true;
  }

  function isInList(email: string) {
    let emailList: string[] = props.items.concat(props.existingItems);
    return emailList.includes(email);
  }

  function isEmail(email: string) {
    return validEmail.test(email);
  }

  return (
    <Form.Group>
      <div className="input-label">
        <Form.Label>{props.label}</Form.Label>&nbsp;
        {props.items.map((item) => (
          <Badge pill variant="light" className="tag-item" key={item}>
            {item}
            <button
              type="button"
              className="button"
              onClick={() => handleDelete(item)}
            >
              &times;
            </button>
          </Badge>
        ))}
      </div>

      <Form.Control
        className={'input ' + (error && ' is-invalid')}
        value={value}
        placeholder="Type or paste email addresses and press `Enter`..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onPaste={handlePaste}
      />

      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
}
