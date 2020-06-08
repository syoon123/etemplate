import React from 'react';
import RecipientsPreview from './RecipientsPreview';
import CustomButton from './CustomButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomButtonCallback } from '../App';

type TemplatePreviewProps = {
  isHidden: boolean;
  recipients: string[];
  cc: string[];
  bcc: string[];
  body: string;
  mailToUrl: string;
  handleBackToEdit: CustomButtonCallback;
};

export default function TemplatePreview(props: TemplatePreviewProps) {
  const [urlHidden, setUrlHidden] = React.useState<boolean>(true);

  if (props.isHidden) {
    return;
  }

  return (
    <>
      {RecipientsPreview({
        label: 'To',
        recipients: props.recipients,
        noRecipients: '[blank]',
      })}
      <p>{props.body ? props.body : '[No body]'}</p>
      <Row className="justify-content-md-center">
        <Col sm={4}>
          {CustomButton({
            label: 'Back to Edit',
            secondary: true,
            isHidden: props.isHidden,
            className: 'mb-2',
            action: props.handleBackToEdit,
          })}
        </Col>
        <Col sm={4}>
          {CustomButton({
            label: 'Make URL',
            secondary: false,
            isHidden: props.isHidden,
            className: '',
            action: () => setUrlHidden(!urlHidden),
          })}
        </Col>
      </Row>
      <Row className="justify-content-md-center"></Row>
      <Row>
        <Col>
          <p className="mt-2">{urlHidden ? '' : 'hey'}</p>
        </Col>
      </Row>
    </>
  );
}
