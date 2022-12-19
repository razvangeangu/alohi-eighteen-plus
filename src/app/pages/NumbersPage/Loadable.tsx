/**
 * Asynchronously loads the component for NumbersPage
 */

import { lazyLoad } from 'utils/loadable';

export const NumbersPage = lazyLoad(
  () => import('./index'),
  module => module.NumbersPage,
);
