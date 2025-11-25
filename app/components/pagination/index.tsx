import styles from "@/app/components/pagination/pagination.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number[];
  currentPage: number;
  handlePage: (page: number) => void;
  handlePrevPage: (page: number) => void;
  handleNextPage: (page: number) => void;
}

function Pagination({
  totalPages,
  currentPage,
  handlePage,
  handlePrevPage,
  handleNextPage,
}: PaginationProps) {
  return (
    <div className={styles.container}>
      <ChevronLeft
        className={styles.chevron}
        size={20}
        onClick={() => handlePrevPage(currentPage)}
      />
      {totalPages.map((page, index) => {
        return (
          <button
            onClick={() => handlePage(page)}
            className={`${styles.button} ${
              currentPage === page ? styles.selected : ""
            }`}
            key={index}
          >
            {page}
          </button>
        );
      })}
      <ChevronRight
        className={styles.chevron}
        size={20}
        onClick={() => handleNextPage(currentPage)}
      />
    </div>
  );
}

export default Pagination;
