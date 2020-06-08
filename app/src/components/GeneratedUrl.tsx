import React from 'react';
import CustomButton from './CustomButton';
import { CustomButtonCallback } from '../App';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type GeneratedUrlProps = {
  isHidden: boolean;
  tinyUrl: string;
  handleRefresh: CustomButtonCallback;
};

export default function GeneratedUrl(props: GeneratedUrlProps) {
  if (props.isHidden) {
    return;
  }
  return (
    <>
      <Row>
        <Col className="mt-3 mb-0">
          <p className="center mb-0">
            <a className="mb-0 tiny-url" href={props.tinyUrl}>
              {props.tinyUrl}
            </a>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-0 mb-3">
        <Col md={4}>
          {CustomButton({
            label: 'Copy to Clipboard',
            variant: 'link',
            className: '',
            size: 'sm',
            action: () => {
              navigator.clipboard.writeText(props.tinyUrl);
            },
          })}
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md={4}>
          {CustomButton({
            label: 'New Template',
            variant: 'danger',
            className: '',
            action: props.handleRefresh,
          })}
        </Col>
      </Row>
    </>
  );
}
