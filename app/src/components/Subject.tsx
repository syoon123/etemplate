import React from 'react';

type SubjectProps = {
  isHidden: boolean;
  subject: string;
};

export default function Subject(props: SubjectProps) {
  if (props.isHidden) {
    return;
  }
  return (
    <h2 className="break-word mb-3">
      {props.subject ? props.subject : '[No Subject]'}
    </h2>
  );
}
