import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Recipients from './components/Recipients';
import CustomButton from './components/CustomButton';
import Content from './components/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export type RecipientsCallback = {
  (items: string[]): void;
};

export type ContentCallback = {
  (text: string): void;
};

export type CustomButtonCallback = {
  (): void;
};

export default function App() {
  const [recipients, setRecipients] = React.useState<string[]>([]);
  const [cc, setCc] = React.useState<string[]>([]);
  const [bcc, setBcc] = React.useState<string[]>([]);
  const [subject, setSubject] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [mailToUrl, setMailToUrl] = React.useState<string>('');
  const [isEditing, setIsEditing] = React.useState<boolean>(true);
  const [errors, setErrors] = React.useState<boolean>(true);

  function handleRecipients(items: string[]) {
    setRecipients(items);
    setErrors(!items.concat(cc).concat(bcc));
  }

  function handleCc(items: string[]) {
    setCc(items);
    setErrors(!items.concat(cc).concat(bcc));
  }

  function handleBcc(items: string[]) {
    setBcc(items);
    setErrors(!items.concat(cc).concat(bcc));
  }

  function handleSubject(text: string) {
    setSubject(text);
  }

  function handleContent(text: string) {
    setContent(text);
  }

  function handleGenerateUrl() {
    console.log('hey');
  }

  return (
    <div className="App">
      <Container className="p-3">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <h1 className="text-center mb-3">eTemplate</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <Card>
              <Card.Body>
                <h2 className="break-word mb-3">
                  {subject ? subject : '[No Subject]'}
                </h2>
                {Recipients({
                  label: 'To:',
                  action: handleRecipients,
                  items: recipients,
                  existingItems: cc.concat(bcc),
                  isHidden: !isEditing,
                })}
                {Recipients({
                  label: 'Cc:',
                  action: handleCc,
                  items: cc,
                  existingItems: recipients.concat(bcc),
                  isHidden: !isEditing,
                })}
                {Recipients({
                  label: 'Bcc:',
                  action: handleBcc,
                  items: bcc,
                  existingItems: recipients.concat(cc),
                  isHidden: !isEditing,
                })}
                {Content({
                  label: 'Subject:',
                  action: handleSubject,
                  placeholder: 'Type/paste subject line',
                  isLongText: false,
                  isHidden: !isEditing,
                })}
                {Content({
                  label: 'Body:',
                  action: handleContent,
                  placeholder: 'Type/paste email body',
                  isLongText: true,
                  isHidden: !isEditing,
                })}
                <Row className="justify-content-md-center">
                  <Col lg={4}>
                    {CustomButton({
                      label: 'Generate URL',
                      action: handleGenerateUrl,
                      class: 'btn-dark btn-block',
                      isHidden: !isEditing,
                      isDisabled: errors,
                    })}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
