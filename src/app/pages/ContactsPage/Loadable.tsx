/**
 * Asynchronously loads the component for ContactsPage
 */

import { lazyLoad } from 'utils/loadable';

export const ContactsPage = lazyLoad(
  () => import('./index'),
  module => module.ContactsPage,
);
