import React from 'react';

type RecipientsPreviewProps = {
  label: string;
  recipients: string[];
  noRecipients: string;
};

export default function RecipientsPreview(props: RecipientsPreviewProps) {
  let recipientsString: string = '';
  if (props.recipients.length === 0) {
    recipientsString = props.noRecipients;
  } else {
    for (let i in props.recipients) {
      recipientsString = recipientsString + props.recipients[i] + ', ';
    }
    recipientsString = recipientsString.substring(
      0,
      recipientsString.length - 2
    );
  }
  return <p>{props.label + ': ' + recipientsString}</p>;
}
