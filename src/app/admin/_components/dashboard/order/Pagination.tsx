"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const goToPage = (number: number) => {
    if (number == 1) {
      alert(currentPage + 1);
    } else {
      alert(currentPage - 1);
    }
  };
  return (
    <div className="mt-10 flex items-center justify-between w-full">
      <p className="text-tremor-default tabular-nums text-tremor-content dark:text-dark-tremor-content">
        Page
        <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {totalPages}
        </span>
      </p>
      <div className="inline-flex items-center">
        <span className="p-2">
          {currentPage <= totalPages ? (
            <ArrowLeftCircle size={24} className="text-muted" />
          ) : (
            <ArrowLeftCircle size={24} onClick={() => goToPage(-1)} />
          )}
        </span>
        <span className="p-2">
          {currentPage == totalPages ? (
            <ArrowLeftCircle size={24} className="text-muted" />
          ) : (
            <ArrowRightCircle size={24} onClick={() => goToPage(1)} />
          )}
        </span>
      </div>
      <div className="flex items-center space-x-2"></div>
    </div>
  );
};

export default Pagination;
