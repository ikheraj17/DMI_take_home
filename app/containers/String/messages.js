/*
 * String Messages
 *
 * This contains all the text for the String container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.String';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the String container!',
  },
});
