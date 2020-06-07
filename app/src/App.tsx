import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";

export default function App() {
  const [recipients, setRecipients] = React.useState<string[]>([]);
  const [cc, setCc] = React.useState<string[]>([]);
  const [bcc, setBcc] = React.useState<string[]>([]);
  const [content, setContent] = React.useState<string>('');
  const [mailToUrl, setMailToUrl] = React.useState<string>('');
  return (
    <div className="App">
      <Container className="p-3">
        <h1>Hello</h1>
      </Container>
    </div>
  );
}
