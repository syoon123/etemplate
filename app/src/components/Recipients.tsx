import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RecipientsCallback } from '../App';

export type RecipientsProps = {
  label: string;
  action: RecipientsCallback;
  items: string[];
};

export default function Recipients(props: RecipientsProps) {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

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
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

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
    return props.items.includes(email);
  }

  function isEmail(email: string) {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }

  return (
    <Row>
      <Col>
        <>
          {props.items.map((item) => (
            <div className="tag-item" key={item}>
              {item}
              <button
                type="button"
                className="button"
                onClick={() => handleDelete(item)}
              >
                &times;
              </button>
            </div>
          ))}

          <input
            className={'input ' + (error && ' has-error')}
            value={value}
            placeholder="Type or paste email addresses and press `Enter`..."
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onPaste={handlePaste}
          />

          {error && <p className="error">{error}</p>}
        </>
      </Col>
    </Row>
  );
}
