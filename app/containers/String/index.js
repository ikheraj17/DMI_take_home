/**
 *
 * String
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectString from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function String() {
  useInjectReducer({ key: 'string', reducer });
  useInjectSaga({ key: 'string', saga });

  return (
    <div>
      <Helmet>
        <title>String</title>
        <meta name="description" content="Description of String" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

String.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(String);
