import React from 'react';
import RecipientsPreview from './RecipientsPreview';
import CustomButton from './CustomButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from './Content';
import { CustomButtonCallback, ContentCallback } from '../App';

type TemplatePreviewProps = {
  isHidden: boolean;
  recipients: string[];
  cc: string[];
  bcc: string[];
  body: string;
  mailToUrl: string;
  alias: string;
  aliasValid: boolean;
  handleBackToEdit: CustomButtonCallback;
  handleGenerateTinyUrl: CustomButtonCallback;
  handleAlias: ContentCallback;
};

export default function TemplatePreview(props: TemplatePreviewProps) {
  if (props.isHidden) {
    return;
  }

  return (
    <>
      {RecipientsPreview({
        label: 'To',
        recipients: props.recipients,
        noRecipients: '[none]',
      })}
      {RecipientsPreview({
        label: 'Ccc',
        recipients: props.cc,
        noRecipients: '[none]',
      })}
      {RecipientsPreview({
        label: 'Bcc',
        recipients: props.bcc,
        noRecipients: '[none]',
      })}
      <hr />
      <p className="preview-body">{props.body ? props.body : '[No body]'}</p>
      <hr />
      {Content({
        label: 'Custom TinyURL Alias (Optional)',
        placeholder: 'ex. my-special-alias',
        action: props.handleAlias,
        isLongText: false,
        value: props.alias,
        isHidden: props.isHidden,
        helperText: props.alias ? `tinyurl.com/${props.alias}` : '',
        errorMessage: props.aliasValid
          ? ''
          : 'Invalid or unavailable alias. Please try again.',
      })}
      <Row className="justify-content-md-center">
        <Col md={4}>
          {CustomButton({
            label: 'Back to Edit',
            variant: 'secondary',
            className: 'mb-2',
            action: props.handleBackToEdit,
          })}
        </Col>
        <Col md={4}>
          {CustomButton({
            label: 'Make URL',
            variant: 'primary',
            action: props.handleGenerateTinyUrl,
          })}
        </Col>
      </Row>
    </>
  );
}
