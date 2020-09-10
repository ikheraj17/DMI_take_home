/**
 *
 * String
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { loadStrings } from './actions';
import { makeAllStringsSelector, makeLoadingSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ListItem from '../../components/ListItem';

// eslint-disable-next-line no-shadow
export function String({ allStrings, loadStrings }) {
  useInjectReducer({ key: 'string', reducer });
  useInjectSaga({ key: 'string', saga });

  useEffect(() => {
    loadStrings();
  }, []);
  if (!allStrings.length) {
    return <div>No strings here! You should add some... I feel useless.</div>;
  }
  return (
    <div>
      <Helmet>
        <title>String</title>
        <meta name="description" content="Description of String" />
      </Helmet>
      <div>
        {allStrings.map(string => (
          <ListItem key={string.id} item={string.text} />
        ))}
      </div>
    </div>
  );
}

String.propTypes = {
  loadStrings: PropTypes.func.isRequired,
  allStrings: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  allStrings: makeAllStringsSelector(),
  loading: makeLoadingSelector(),
});

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
