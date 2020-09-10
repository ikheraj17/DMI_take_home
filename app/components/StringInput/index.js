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
      </CenteredSection>
    </div>
  );
}

StringInput.propTypes = {};

export default StringInput;
