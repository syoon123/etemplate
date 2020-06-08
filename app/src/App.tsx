import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Recipients from './components/Recipients';
import CustomButton from './components/CustomButton';
import TemplatePreview from './components/TemplatePreview';
import TemplateEdit from './components/TemplateEdit';
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
  const [body, setBody] = React.useState<string>('');
  const [mailToUrl, setMailToUrl] = React.useState<string>('');
  const [isEditing, setIsEditing] = React.useState<boolean>(true);
  const [alias, setAlias] = React.useState<string>('');
  const [aliasValid, setAliasValid] = React.useState<boolean>(true);
  const [tinyUrl, setTinyUrl] = React.useState<string>('');
  const [linkCopied, setLinkCopied] = React.useState<boolean>(false);

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

  function handleBody(text: string) {
    setBody(text);
  }

  function handleBackToEdit() {
    setTinyUrl('');
    setIsEditing(true);
  }

  function handleAlias(text: string) {
    setAlias(text);
  }

  function handleGenerateUrl() {
    let recipientsList: string = encodeURIComponent(recipients.join());
    let ccList: string = cc.join();
    if (ccList !== '') {
      ccList = `cc=`.concat(encodeURIComponent(ccList));
    }
    let bccList: string = bcc.join();
    if (bccList !== '') {
      bccList = `&bcc=`.concat(encodeURIComponent(bccList));
    }
    let subjectString: string = '';
    if (subject !== '') {
      subjectString = `&subject=${encodeURIComponent(subject)}`;
    }
    let bodyString: string = `&body=${encodeURIComponent(body)}`;
    setMailToUrl(
      `mailto:${recipientsList}?${ccList}${bccList}${subjectString}${bodyString}`
    );
    setIsEditing(false);
  }

  function handleGenerateTinyUrl() {
    let getRequest: string = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
      mailToUrl
    )}`;
    if (alias !== '') {
      getRequest = getRequest.concat(`&alias=${alias}`);
    }
    fetch(getRequest)
      .then((response: Response) => {
        return response.text();
      })
      .then((response: String) => {
        console.log(response);
      });
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
                <h2 className="break-word mb-4">
                  {subject ? subject : '[No Subject]'}
                </h2>
                {TemplateEdit({
                  isHidden: !isEditing,
                  recipients: recipients,
                  cc: cc,
                  bcc: bcc,
                  body: body,
                  subject: subject,
                  handleRecipients: handleRecipients,
                  handleCc: handleCc,
                  handleBcc: handleBcc,
                  handleSubject: handleSubject,
                  handleBody: handleBody,
                  handleGenerateUrl: handleGenerateUrl,
                })}
                {TemplatePreview({
                  isHidden: isEditing,
                  recipients: recipients,
                  cc: cc,
                  bcc: bcc,
                  body: body,
                  mailToUrl: mailToUrl,
                  alias: alias,
                  aliasValid: aliasValid,
                  handleBackToEdit: handleBackToEdit,
                  handleAlias: handleAlias,
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
