/**
 * Asynchronously loads the component for SpamPage
 */

import { lazyLoad } from 'utils/loadable';

export const SpamPage = lazyLoad(
  () => import('./index'),
  module => module.SpamPage,
);
