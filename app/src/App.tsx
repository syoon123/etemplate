import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import TemplatePreview from './components/TemplatePreview';
import TemplateEdit from './components/TemplateEdit';
import GeneratedUrl from './components/GeneratedUrl';
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
  const [fullUrl, setFullUrl] = React.useState<string>('');
  const [isEditing, setIsEditing] = React.useState<boolean>(true);
  const [filterBuster, setFilterBuster] = React.useState<boolean>(true);
  const [alias, setAlias] = React.useState<string>('');
  const [aliasValid, setAliasValid] = React.useState<boolean>(true);
  const [tinyUrl, setTinyUrl] = React.useState<string>('');

  function handleToggleFilterBuster() {
    setFilterBuster(!filterBuster);
  }

  function handleBackToEdit() {
    setTinyUrl('');
    setIsEditing(true);
  }

  function handleAlias(text: string) {
    setAlias(text.trim());
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
    if (filterBuster) {
      setFullUrl(
        `https://st234pa.github.io/filter-buster/?to=${recipientsList}&${ccList}${bccList}${subjectString}${bodyString}`
      );
    } else {
      setFullUrl(
        `mailto:${recipientsList}?${ccList}${bccList}${subjectString}${bodyString}`
      );
    }
    setIsEditing(false);
  }

  function handleGenerateTinyUrl() {
    let getRequest: string = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
      fullUrl
    )}`;
    if (alias !== '') {
      getRequest = getRequest.concat(`&alias=${alias}`);
    }
    fetch(getRequest, { headers: { Origin: 'https://syoon123.github.io' } })
      .then((response: Response) => {
        return response.text();
      })
      .then((response: string) => {
        if (response === 'Error') {
          setAliasValid(false);
          setTinyUrl('');
        } else {
          setAliasValid(true);
          setTinyUrl(response);
        }
      })
      .then(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(tinyUrl);
  }

  function handleRefresh() {
    window.location.reload();
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Container className="p-3">
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <h1 className="text-center mb-3">e-Template</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-0">
          <Col lg={8}>
            <p className="text-center mb-0">
              Thanks to resources like{' '}
              <a
                href="https://defund12.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                defund12.org
              </a>{' '}
              and{' '}
              <a
                href="https://sayitagain.carrd.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Emails for Justice
              </a>
              , making one's voice heard has never been easier — by clicking a
              link, one can contact institution leaders and government officials
              in a matter of seconds. Inspired by these activists' powerful use
              of technology, we've built a tool to make this kind of email
              templating as simple and accessible as possible.
            </p>
            <p className="text-center mb-3">
              <small>&mdash; Sarah and Stephanie Yoon</small>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <p className="text-center mb-3">
              <a
                href="https://st234pa.github.io/representative-emails"
                target="_blank"
                rel="noopener noreferrer"
              >
                Need to find your representatives' emails?
              </a>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <Card>
              <Card.Body className="pb-0">
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
                  handleRecipients: setRecipients,
                  handleCc: setCc,
                  handleBcc: setBcc,
                  handleSubject: setSubject,
                  handleBody: setBody,
                  handleGenerateUrl: handleGenerateUrl,
                })}
                {TemplatePreview({
                  isHidden: isEditing,
                  recipients: recipients,
                  cc: cc,
                  bcc: bcc,
                  body: body,
                  alias: alias,
                  aliasValid: aliasValid,
                  filterBuster: filterBuster,
                  toggleFilterBuster: handleToggleFilterBuster,
                  handleBackToEdit: handleBackToEdit,
                  handleGenerateTinyUrl: handleGenerateTinyUrl,
                  handleAlias: handleAlias,
                })}
                {GeneratedUrl({
                  tinyUrl: tinyUrl,
                  isHidden: isEditing || !tinyUrl,
                  handleRefresh: handleRefresh,
                  handleCopyToClipboard: handleCopyToClipboard,
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
