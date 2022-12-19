/* eslint-disable react/no-unstable-nested-components */
import { createColumnHelper } from '@tanstack/react-table';
import { Table } from 'app/components/Table';
import { Fax } from 'app/components/Table/types';
import dayjs from 'dayjs';
import { parsePhoneNumber } from 'libphonenumber-js';
import { translations } from 'locales/translations';
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { mockData } from './constants';

export function InboxPage() {
  const { t, i18n } = useTranslation();

  const columnHelper = createColumnHelper<Partial<Fax>>();

  const columns = useMemo(
    () => [
      columnHelper.accessor('status', {
        cell: info =>
          (info.getValue() || '')
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        header: () => <span>{t(translations.inbox.table.status)}</span>,
      }),
      columnHelper.accessor('from', {
        cell: info =>
          parsePhoneNumber(info.getValue() || '').formatInternational(),
        header: () => <span>{t(translations.inbox.table.from)}</span>,
      }),
      columnHelper.accessor('to', {
        cell: info =>
          parsePhoneNumber(info.getValue() || '').formatInternational(),
        header: () => <span>{t(translations.inbox.table.to)}</span>,
      }),
      columnHelper.accessor('start_time', {
        cell: info => dayjs(info.getValue()).format('MMM D, YYYY, h:mm A'),
        header: () => <span>{t(translations.inbox.table.startTime)}</span>,
      }),
      columnHelper.accessor('pages', {
        cell: info => info.getValue(),
        header: () => <span>{t(translations.inbox.table.pages)}</span>,
      }),
      columnHelper.accessor('cost', {
        cell: info =>
          Intl.NumberFormat(i18n.language, {
            style: 'currency',
            currency: 'CHF',
          }).format(parseFloat(`${info.getValue() || 0}`)),
        header: () => <span>{t(translations.inbox.table.cost)}</span>,
      }),
    ],
    [columnHelper, i18n.language, t],
  );

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.inbox)}</title>
      </Helmet>

      <Container>
        <Table columns={columns} data={mockData} />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: calc(100vh - 4.0625rem - 2rem);
  overflow: hidden;
`;
