/**
 *
 * StringInput
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CenteredSection from '../../containers/HomePage/CenteredSection';
import Button from '../Button';

function StringInput() {
  return (
    <div>
      <CenteredSection>
        <div style={{ marginTop: '5%' }}>
          <FormattedMessage {...messages.header} />
        </div>
        <form>
          <input type="text" style={{ width: '80%', marginTop: '10%' }} />
        </form>
        <Button onClick={() => alert('woo')} primary={1}>
          Submit Input
        </Button>
      </CenteredSection>
    </div>
  );
}

StringInput.propTypes = {};

export default StringInput;
