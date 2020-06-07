import React from 'react';
import './App.css';

export default function App() {
  const [recipients, setRecipients] = React.useState<string[]>([]);
  const [cc, setCc] = React.useState<string[]>([]);
  const [bcc, setBcc] = React.useState<string[]>([]);
  const [content, setContent] = React.useState<string>('');
  const [mailToUrl, setMailToUrl] = React.useState<string>('');
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}
