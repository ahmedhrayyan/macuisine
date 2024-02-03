import range from "lodash/range";
import last from "lodash/last";
import { useMemo } from "react";
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination.tsx";
import { useSearchParams } from "react-router-dom";

interface IPaginationProps {
  numOfItems: number;
  itemsPerPage?: number;
  maxPages?: number;
}

export default function Pagination({ numOfItems, itemsPerPage = 10, maxPages = 5 }: IPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const totalPages = Math.ceil(numOfItems / itemsPerPage) || 1;
  const pages = useMemo(() => range(1, totalPages + 1), [totalPages]);
  const shownPages = useMemo(() => {
    if (!maxPages || pages.length <= maxPages) return pages;

    // show maxPages pages around the current page
    const middle = Math.floor(maxPages / 2);
    const startIndex =
      currentPage + middle > pages.length ? Math.max(0, currentPage - maxPages) : Math.max(0, currentPage - middle - 1);
    const endIndex =
      currentPage - middle < 1 ? Math.min(pages.length, maxPages) : Math.min(pages.length, currentPage + middle);

    return pages.slice(startIndex, endIndex);
  }, [currentPage, pages.length, maxPages]); // eslint-disable-line react-hooks/exhaustive-deps
  const lastPage = last(shownPages);

  function handlePageChange(page: number) {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }

  return (
    <ShadcnPagination>
      <PaginationContent>
        {shownPages[0] !== 1 && (
          <PaginationItem>
            <PaginationLink
              isActive={currentPage === 1}
              onClick={() => {
                handlePageChange(1);
              }}
            >
              {1}
            </PaginationLink>
          </PaginationItem>
        )}
        {shownPages[0] > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {shownPages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => {
                handlePageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {lastPage && lastPage < pages.length - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {lastPage !== pages.length && (
          <PaginationItem>
            <PaginationLink
              isActive={currentPage === pages.length}
              onClick={() => {
                handlePageChange(pages.length);
              }}
            >
              {pages.length}
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </ShadcnPagination>
  );
}
