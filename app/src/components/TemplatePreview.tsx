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
  handleBackToEdit: CustomButtonCallback;
  handleAlias: ContentCallback;
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
      <hr/>
      <p className="preview-body">{props.body ? props.body : '[No body]'}</p>
      <hr/>
      {Content({
        label:
          'Custom TinyURL Alias (Optional)',
        placeholder: 'ex. my-special-alias',
        action: props.handleAlias,
        isLongText: false,
        value: props.alias,
        isHidden: props.isHidden,
        helperText: props.alias ? `tinyurl.com/${props.alias}` : "",
      })}
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
