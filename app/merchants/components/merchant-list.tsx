"use client";

import styles from "@/app/merchants/page.module.css";
import { Merchant } from "@/app/types/merchants";

interface MerchantListProps {
  data: Merchant[];
}

function MerchantList({ data }: MerchantListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input placeholder="매장명을 입력해주세요"></input>
      </div>
      <div className={styles.listContainer}>
        <h2 className={styles.title}>가맹점 리스트 목록</h2>
        <div className={styles.filterContainer}>
          <div>dropdown 메뉴</div>
          <div>상세 필터</div>
        </div>
        <div className={styles.cardListContainer}>
          {data.map((item, index) => {
            const { mchtCode, mchtName, status, bizType } = item;
            return (
              <div className={styles.card} key={index}>
                <h3>{mchtName}</h3>
                <p>{status}</p>
                <p>{bizType}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div>페이지네이션 바 </div> */}
    </div>
  );
}

export default MerchantList;
