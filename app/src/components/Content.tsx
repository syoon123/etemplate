import React from 'react';
import { ContentCallback } from '../App';
import Form from 'react-bootstrap/Form';

type ContentProps = {
  label: string;
  placeholder: string;
  action: ContentCallback;
  isLongText: boolean;
  isHidden: boolean;
  value: string;
  helperText: string;
  errorMessage: string;
};

export default function Content(props: ContentProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.action(evt.target.value);
  };
  if (props.isHidden) {
    return;
  }
  if (props.isLongText) {
    return (
      <Form.Group>
        <Form.Label className="input-label">{props.label}</Form.Label>&nbsp;
      </Form.Group>
    );
  } else {
    return (
      <Form.Group>
        <Form.Label className="input-label">{props.label}</Form.Label>&nbsp;
      </Form.Group>
    );
  }
}

// let formText: any;
// if (props.helperText) {
//   formText = <Form.Text className="text-muted">{props.helperText}</Form.Text>;
// } else {
//   formText = <div></div>;
// }
// let formFeedback: any;
// if (props.errorMessage) {
//   formFeedback = (
//     <Form.Control.Feedback type="invalid">
//       {props.errorMessage}
//     </Form.Control.Feedback>
//   );
// } else {
//   formFeedback = <div></div>;
// }
// let formControl: any;
// if (props.isLongText) {
//   formControl = (
//     <Form.Control
//       as="textarea"
//       rows={10}
//       placeholder={props.placeholder}
//       onChange={handleChange}
//       value={props.value}
//     />
//   );
// } else {
//   formControl = (
//     <Form.Control
//       className="input"
//       placeholder={props.placeholder}
//       value={props.value}
//       onChange={handleChange}
//     >
//       {/* <Form.Text className="text-muted">
//           Press enter, space, or comma to add to recipients list.
//         </Form.Text> */}

//       {/* {props.errorMessage && (
//           <Form.Control.Feedback type="invalid">
//             {props.errorMessage}
//           </Form.Control.Feedback>
//         )} */}
//     </Form.Control>
//   );
// }

// return (
//   <Form.Group>
//     <Form.Label className="input-label">{props.label}</Form.Label>&nbsp;
//     {formControl}
//     {formFeedback}
//   </Form.Group>
// );
