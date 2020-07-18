import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { CustomButtonCallback } from '../App';

export type FilterBusterToggleProps = {
  checked: boolean;
  onChange: CustomButtonCallback;
};

function FilterBusterToggle(props: FilterBusterToggleProps) {
  return (
    <Row className="mb-3">
      <Col>
        <Form>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={`Filter Buster ${props.checked ? 'ON' : 'OFF'}`}
              onChange={props.onChange}
              checked={props.checked}
            />
            <Form.Text className="text-muted">
              When Filter Buster is on, the generated link will direct users to
              Filter Buster, which will add randomized characters to each word
              in the subject and body, thereby avoiding email filters!
            </Form.Text>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default FilterBusterToggle;
