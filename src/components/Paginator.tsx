import { useState } from "react";
import { IconButton, Select, Text, TextField } from "@radix-ui/themes";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import SummaryCard from "./SummaryCard";
import PaginatorProps from "../types/props/PaginatorProps.interface";

const defaultPageSizes = [8, 12, 16, 20];

const Paginator = ({
  pageSizes = [],
  items,
  about = "items",
}: PaginatorProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(
    pageSizes.length > 0 ? pageSizes[0] : defaultPageSizes[0]
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Get items for the current page
  const displayedItems = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const previousPage = () => goToPage(currentPage - 1);
  const nextPage = () => goToPage(currentPage + 1);

  const handlePageSizeChange = (value: string) => {
    const newPageSize = parseInt(value, 10);
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to the first page to avoid out-of-range issues
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Search bar */}
      <div className="flex justify-between items-center mb-3">
        <TextField.Root
          size="2"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full"
        >
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
        </TextField.Root>
      </div>

      {/* Conditional rendering for different scenarios */}
      {items.length === 0 ? (
        // When the items array is empty
        <div className="flex justify-center items-center p-6 text-gray-500">
          <Text size="2">Could not find any {about}.</Text>
        </div>
      ) : filteredItems.length === 0 ? (
        // When search query yields no results
        <div className="flex justify-center items-center p-6 text-gray-500">
          <Text size="2">
            No {about} to display. Try adjusting your search.
          </Text>
        </div>
      ) : (
        <>
          {/* Display items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {displayedItems.map((item) => (
              <SummaryCard
                key={item.id}
                id={item.id}
                description={item.description}
                progress={item.progress}
                title={item.title}
              />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex w-full gap-3 justify-end items-center p-3">
            <IconButton
              size="1"
              variant="ghost"
              radius="full"
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
            >
              <DoubleArrowLeftIcon />
            </IconButton>
            <IconButton
              size="1"
              variant="ghost"
              radius="full"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              size="1"
              variant="ghost"
              radius="full"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon />
            </IconButton>
            <IconButton
              size="1"
              variant="ghost"
              radius="full"
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <DoubleArrowRightIcon />
            </IconButton>
            <div className="flex gap-2 items-center">
              <Text size="1">Showing</Text>
              <Select.Root
                size="1"
                defaultValue={pageSize.toString()}
                onValueChange={handlePageSizeChange}
              >
                <Select.Trigger />
                <Select.Content>
                  {(pageSizes.length > 0 ? pageSizes : defaultPageSizes).map(
                    (pageSize) => (
                      <Select.Item key={pageSize} value={pageSize.toString()}>
                        {pageSize}
                      </Select.Item>
                    )
                  )}
                </Select.Content>
              </Select.Root>
              <Text size="1">
                Items of {totalItems} (Page {currentPage} of {totalPages})
              </Text>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Paginator;
