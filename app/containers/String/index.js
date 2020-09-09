/**
 *
 * String
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { loadStrings } from './actions';
import { makeAllStringsSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// eslint-disable-next-line no-shadow
export function String({ allStrings, loadStrings }) {
  useInjectReducer({ key: 'string', reducer });
  useInjectSaga({ key: 'string', saga });

  useEffect(() => {
    loadStrings();
  }, []);

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
  loadStrings: PropTypes.func.isRequired,
  allStrings: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  allStrings: makeAllStringsSelector(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     loadStrings: () => dispatch(loadStrings()),
//   };
// }

const mapDispatchToProps = {
  loadStrings,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(String);
