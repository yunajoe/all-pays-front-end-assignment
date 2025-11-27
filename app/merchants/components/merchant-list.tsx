"use client";

import Dropdown from "@/app/components/dropdown";
import Pagination from "@/app/components/pagination";
import styles from "@/app/merchants/components/merchant-list.module.css";
import { Merchant } from "@/app/types/merchants";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { MERCHANT_DROPDOWN_MENU_OPTIONS } from "../utils/const";

interface MerchantListProps {
  data: Merchant[];
}

const COUNT_NUM = 6;

function MerchantList({ data }: MerchantListProps) {
  const [merchantsData, setMerchantsData] = useState<Merchant[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const [selectedMenu, setSelectedMenu] = useState("");

  const router = useRouter();

  const renderData = useMemo(() => {
    return merchantsData.slice(startIndex, endIndex);
  }, [startIndex, endIndex, merchantsData]);

  const handlePage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      const calStartIndex = page * 6 - 6;
      const calEndIndex = page * 6;
      setStartIndex(calStartIndex);
      setEndIndex(calEndIndex);
    },
    [currentPage]
  );

  const handlePrevPage = useCallback(
    (page: number) => {
      if (page === 1) return;
      setCurrentPage(page - 1);
      const calStartIndex = (page - 1) * 6 - 6;
      const calEndIndex = (page - 1) * 6;
      setStartIndex(calStartIndex);
      setEndIndex(calEndIndex);
    },
    [currentPage]
  );

  const handleNextPage = useCallback(
    (page: number) => {
      if (page === 4) return;
      setCurrentPage(page + 1);
      const calStartIndex = (page + 1) * 6 - 6;
      const calEndIndex = (page + 1) * 6;
      setStartIndex(calStartIndex);
      setEndIndex(calEndIndex);
    },
    [currentPage]
  );
  const pages = Array.from(
    { length: Math.ceil(data.length / COUNT_NUM) },
    (_, index) => index + 1
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.searchContainer}>
          <input placeholder="매장명을 입력해주세요"></input>
        </div>
        <div className={styles.listContainer}>
          <h2 className={styles.title}>가맹점 리스트 목록</h2>
          <div className={styles.filterContainer}>
            <Dropdown
              merchantsData={merchantsData}
              setMerchantsData={setMerchantsData}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              options={MERCHANT_DROPDOWN_MENU_OPTIONS}
            />
            <div>상세 필터</div>
          </div>
          <div className={styles.cardListContainer}>
            {renderData.map((item, index) => {
              const { mchtCode, mchtName, status, bizType } = item;
              return (
                <div
                  className={styles.card}
                  key={index}
                  role="button"
                  onClick={() => {
                    router.push(`/merchants/${mchtCode}`);
                  }}
                >
                  <h3>{mchtName}</h3>
                  <p>{status}</p>
                  <p>{bizType}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Pagination
        totalPages={pages}
        currentPage={currentPage}
        handlePage={handlePage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}

export default MerchantList;
