import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Recipients from './components/Recipients';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type RecipientsCallback = {
  (items: string[]): void;
};

export default function App() {
  const [recipients, setRecipients] = React.useState<string[]>([]);
  // const [cc, setCc] = React.useState<string[]>([]);
  // const [bcc, setBcc] = React.useState<string[]>([]);
  // const [content, setContent] = React.useState<string>('');
  // const [mailToUrl, setMailToUrl] = React.useState<string>('');

  function handleRecipients(items: string[]) {
    console.log(items);
    setRecipients(items);
  }

  // function handleCc(items: string[]) {
  //   setCc(items);
  // }

  return (
    <div className="App">
      <Container className="p-3">
        {Recipients({
          label: 'To:',
          action: handleRecipients,
          items: recipients,
        })}
      </Container>
    </div>
  );
}
