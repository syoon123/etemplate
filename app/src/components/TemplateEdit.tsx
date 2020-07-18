import React from 'react';
import {
  RecipientsCallback,
  ContentCallback,
  CustomButtonCallback,
} from '../App';
import Recipients from './Recipients';
import CustomButton from './CustomButton';
import Content from './Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type TemplateEditProps = {
  subject: string;
  recipients: string[];
  cc: string[];
  bcc: string[];
  body: string;
  isHidden: boolean;
  handleRecipients: RecipientsCallback;
  handleCc: RecipientsCallback;
  handleBcc: RecipientsCallback;
  handleSubject: ContentCallback;
  handleBody: ContentCallback;
  handleGenerateUrl: CustomButtonCallback;
};

export default function TemplateEdit(props: TemplateEditProps) {
  return (
    <>
      {Recipients({
        label: 'To:',
        action: props.handleRecipients,
        items: props.recipients,
        existingItems: props.cc.concat(props.bcc),
        isHidden: props.isHidden,
      })}
      {Recipients({
        label: 'Cc:',
        action: props.handleCc,
        items: props.cc,
        existingItems: props.recipients.concat(props.bcc),
        isHidden: props.isHidden,
      })}
      {Recipients({
        label: 'Bcc:',
        action: props.handleBcc,
        items: props.bcc,
        existingItems: props.recipients.concat(props.cc),
        isHidden: props.isHidden,
      })}
      {Content({
        label: 'Subject:',
        action: props.handleSubject,
        placeholder: 'Type or paste subject line',
        value: props.subject,
        isLongText: false,
        isHidden: props.isHidden,
        helperText: 'For security reasons, content needs to be plain text.',
      })}
      {Content({
        label: 'Body:',
        action: props.handleBody,
        placeholder: 'Type or paste email body',
        isLongText: true,
        value: props.body,
        isHidden: props.isHidden,
        helperText: 'For security reasons, content needs to be plain text.',
      })}
      <Row className="justify-content-md-center pt-3">
        <Col md={4}>
          {CustomButton({
            label: 'Next',
            action: props.handleGenerateUrl,
            variant: 'primary',
            isHidden: props.isHidden,
          })}
        </Col>
      </Row>
    </>
  );
}
