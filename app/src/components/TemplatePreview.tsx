import React from 'react';
import RecipientsPreview from './RecipientsPreview';

type TemplatePreviewProps = {
  isHidden: boolean;
  subject: string;
  recipients: string[];
  cc: string[];
  bcc: string[];
  body: string;
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
        noRecipients: '[blank]',
      })}
      <p>{props.body ? props.body : '[No body]'}</p>
    </>
  );
}
