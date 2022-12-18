/**
 * Asynchronously loads the component for InboxPage
 */

import { lazyLoad } from 'utils/loadable';

export const InboxPage = lazyLoad(
  () => import('./index'),
  module => module.InboxPage,
);
