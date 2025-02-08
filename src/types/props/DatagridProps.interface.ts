import { ColumnDef } from "@tanstack/react-table";

export default interface DatagridProps<T> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  loading?: boolean;
  title?: string;
  hidePagination?: boolean;
}
