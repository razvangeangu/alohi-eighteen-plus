import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import styled from 'styled-components/macro';

export interface TableProps {
  columns: ColumnDef<any, any>[];
  data: any[];
}

export function Table({ data, columns }: TableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

const Container = styled.div`
  table {
    background-color: ${p => p.theme.card.background};
    border-collapse: separate;
    border-radius: 0.5rem;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;

    th,
    td {
      border-bottom: 0.0625rem solid ${p => p.theme.border};
      border-right: 0.0625rem solid ${p => p.theme.border};
      padding: 0.5rem;

      &:first-child {
        border-left: 0.0625rem solid ${p => p.theme.border};
      }
    }

    tr {
      &:last-child {
        td {
          &:first-child {
            border-bottom-left-radius: 0.5rem;
          }

          &:last-child {
            border-bottom-right-radius: 0.5rem;
          }
        }
      }
    }

    /* stylelint-disable-next-line no-descending-specificity */
    th {
      border-top: 0.0625rem solid ${p => p.theme.border};

      &:first-child {
        border-top-left-radius: 0.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
      }
    }
  }
`;
