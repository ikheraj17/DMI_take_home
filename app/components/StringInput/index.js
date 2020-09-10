/**
 *
 * StringInput
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import messages from './messages';
import CenteredSection from '../../containers/HomePage/CenteredSection';
import Button from '../Button';

function StringInput() {
  const [input, setInput] = useState('');

  const addString = () => {
    if (input.length) {
      axios
        .post('/api/add', { text: input })
        .then(res => {
          setInput('');
          alert('You added a string!');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('Are you trying to break me?');
    }
  };

  return (
    <div>
      <CenteredSection>
        <div style={{ marginTop: '5%' }}>
          <FormattedMessage {...messages.header} />
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addString();
          }}
        >
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type="text"
            style={{ width: '80%', marginTop: '10%' }}
          />
        </form>
        <Button onClick={() => addString()} primary={1}>
          Submit Input
        </Button>
      </CenteredSection>
    </div>
  );
}

export default StringInput;
