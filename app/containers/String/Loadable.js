/**
 *
 * Asynchronously loads the component for String
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
