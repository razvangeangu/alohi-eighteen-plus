/**
 * Asynchronously loads the component for SentPage
 */

import { lazyLoad } from 'utils/loadable';

export const SentPage = lazyLoad(
  () => import('./index'),
  module => module.SentPage,
);
