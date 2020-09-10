/*
 * StringInput Messages
 *
 * This contains all the text for the StringInput component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.StringInput';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage:
      'Enter text below and submit to add a string to the server!',
  },
});
