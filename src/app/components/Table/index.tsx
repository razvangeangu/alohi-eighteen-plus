import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { useVirtual } from 'react-virtual';
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
    debugTable: true,
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <Container ref={tableContainerRef}>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{
                    /* stylelint-disable-next-line function-no-unknown */
                    width: header.getSize(),
                  }}
                >
                  {header.isPlaceholder ? null : (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualRows.map(virtualRow => {
            const row = rows[virtualRow.index] as Row<typeof data[0]>;

            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}

const Container = styled.div`
  border: 0.0625rem solid ${p => p.theme.border};
  border-radius: 0.5rem;
  height: inherit;
  overflow: auto;

  table {
    background-color: ${p => p.theme.card.background};
    border-collapse: separate;
    border-radius: 0.5rem;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;

    thead {
      background-color: ${p => p.theme.card.background};
      position: sticky;
      top: 0;
    }

    th,
    td {
      border-bottom: 0.0625rem solid ${p => p.theme.border};
      border-right: 0.0625rem solid ${p => p.theme.border};
      padding: 0.5rem;
    }
  }
`;
