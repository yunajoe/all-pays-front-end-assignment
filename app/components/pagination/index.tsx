import styles from "@/app/components/pagination/pagination.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number[];
  currentPage: number;
  handlePage: (page: number) => void;
}

function Pagination({ totalPages, currentPage, handlePage }: PaginationProps) {
  return (
    <div className={styles.container}>
      <ChevronLeft size={18} />
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
      <ChevronRight size={18} />
    </div>
  );
}

export default Pagination;
