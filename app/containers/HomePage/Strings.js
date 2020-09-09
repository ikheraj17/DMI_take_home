import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectStrings } from './selectors';
import { getStrings } from './actions';
import { makeSelectLoading, makeSelectError } from '../App/selectors';

export const Strings = ({ items, dispatch }) => {
  useEffect(() => {
    dispatch(getStrings());
  }, [dispatch]);
  return (
    <div>
      <div>
        {items.map(item => (
          <div key={item.id}>{item.text}</div>
        ))}
      </div>
    </div>
  );
};

Strings.propTypes = {
  items: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  items: makeSelectStrings(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Strings);
