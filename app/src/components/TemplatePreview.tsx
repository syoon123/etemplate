import React from 'react';

type TemplatePreviewProps = {
  isHidden: boolean;
  subject: string;
};

export default function TemplatePreview(props: TemplatePreviewProps) {
  if (props.isHidden) {
    return;
  }
  return (
    <h2 className="break-word mb-3">
      {props.subject ? props.subject : '[No Subject]'}
    </h2>
  );
}
