/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';

// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import String from '../String/Loadable';
import CenteredSection from './CenteredSection';
import Section from './Section';
// import reducer from './reducer';
// import saga from './saga';

// const key = 'home';

export function HomePage() {
  // useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage id="app.greeting" defaultMessage="String List" />
          </H2>
        </CenteredSection>
        <Section>
          <String />
        </Section>
      </div>
    </article>
  );
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

// const withConnect = connect(
//   null,
//   mapDispatchToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(HomePage);

export default HomePage;
