import React from 'react';
import { ContentCallback } from '../App';

type ContentProps = {
  label: string;
  action: ContentCallback;
  text: string;
};

export default function Content(props: ContentProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.action(evt.target.value);
  };
  return <h1 className="text-center">Email Template URL Generator</h1>;
}
