import SummaryCardProps from "./SummaryCardProps";

export default interface PaginatorProps {
  pageSizes?: number[];
  items: SummaryCardProps[];
  about?: string;
  loading?: boolean;
}
