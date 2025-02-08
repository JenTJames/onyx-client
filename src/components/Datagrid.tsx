import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { IconButton, Select, Skeleton, Table, Text } from "@radix-ui/themes";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import DatagridProps from "../types/props/DatagridProps.interface";

const pageSizes: number[] = [10, 25, 50, 100];

const Datagrid = <T,>({
  data,
  columns,
  loading,
  title,
  hidePagination = false,
}: DatagridProps<T>) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSizes[0],
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="flex flex-col w-full gap-3">
      <Table.Root className="w-full h-full" size="1" variant="surface">
        <Table.Header className="bg-[var(--accent-3)]">
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeaderCell
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {!header.isPlaceholder
                    ? flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    : null}
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {loading ? (
            // show skeleton when loading
            <>
              <Table.Row>
                {columns.map((column) => (
                  <Table.Cell key={column.id}>
                    <Skeleton loading={loading}></Skeleton>
                  </Table.Cell>
                ))}
              </Table.Row>
            </>
          ) : table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            // No rows case
            <Table.Row>
              <Table.Cell
                className="text-center py-20"
                colSpan={columns.length}
              >
                Could not find any {title}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
      {!hidePagination && (
        <div className="flex w-full gap-3 justify-end items-center p-3">
          <IconButton
            size="1"
            variant="ghost"
            radius="full"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <DoubleArrowLeftIcon />
          </IconButton>
          <IconButton
            size="1"
            variant="ghost"
            radius="full"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            size="1"
            variant="ghost"
            radius="full"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon />
          </IconButton>
          <IconButton
            size="1"
            variant="ghost"
            radius="full"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <DoubleArrowRightIcon />
          </IconButton>
          <div className="flex gap-2 items-center">
            <Text size="1">Showing</Text>
            <Select.Root
              size="1"
              onValueChange={(value) => table.setPageSize(+value)}
              value={table.getState().pagination.pageSize.toString()}
            >
              <Select.Trigger />
              <Select.Content>
                {pageSizes.map((pageSize) => (
                  <Select.Item key={pageSize} value={pageSize.toString()}>
                    {pageSize}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
            <Text size="1">Rows</Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datagrid;
