"use client";

import { MerchantInfo } from "@/app/types/preprocess";
import { TOP_RANK_MERCHANTS_TABLE_TITLES } from "../../utils/const";
import styles from "./top-rank-merchants-table.module.css";

interface TopRankMerchantsTableProps {
  data: MerchantInfo[];
}

function TopRankMerchantsTable({ data }: TopRankMerchantsTableProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.tHead}>
        <tr>
          {TOP_RANK_MERCHANTS_TABLE_TITLES.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tBody}>
        {data.map((item, index) => {
          const {
            mchtCode,
            totalAmount,
            mchtName,
            bizType,
            status,
            transCount,
          } = item;
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{mchtCode}</td>
              <td>{mchtName}</td>
              <td>{totalAmount.toLocaleString()} KRW</td>
              <td>{bizType}</td>
              <td>{transCount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TopRankMerchantsTable;
