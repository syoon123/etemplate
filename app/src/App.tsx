import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Recipients from './components/Recipients';
import Content from './components/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type RecipientsCallback = {
  (items: string[]): void;
};

export type ContentCallback = {
  (text: string): void;
};

export default function App() {
  const [recipients, setRecipients] = React.useState<string[]>([]);
  const [cc, setCc] = React.useState<string[]>([]);
  const [bcc, setBcc] = React.useState<string[]>([]);
  const [subject, setSubject] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [mailToUrl, setMailToUrl] = React.useState<string>('');

  function handleRecipients(items: string[]) {
    setRecipients(items);
  }

  function handleCc(items: string[]) {
    setCc(items);
  }

  function handleBcc(items: string[]) {
    setBcc(items);
  }

  function handleSubject(text: string) {
    setSubject(text);
  }

  function handleContent(text: string) {
    setContent(text);
  }

  return (
    <div className="App">
      <Container className="p-3">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <h1 className="text-center">Email Template Link Generator</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            {Recipients({
              label: 'To:',
              action: handleRecipients,
              items: recipients,
              existingItems: cc.concat(bcc),
              isHidden: false,
            })}
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            {Recipients({
              label: 'Cc:',
              action: handleCc,
              items: cc,
              existingItems: recipients.concat(bcc),
              isHidden: false,
            })}
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            {Recipients({
              label: 'Bcc:',
              action: handleBcc,
              items: bcc,
              existingItems: recipients.concat(cc),
              isHidden: false,
            })}
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            {Content({
              label: 'Subject:',
              action: handleSubject,
              placeholder: 'Enter subject line',
              isLongText: false,
              isHidden: false,
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
