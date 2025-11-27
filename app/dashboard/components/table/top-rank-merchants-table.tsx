import { MerchantInfo } from "@/app/types/preprocess";
import { getTopNByTotalAmount } from "../../utils";
import { TOP_RANK_MERCHANTS_TABLE_TITLES } from "../../utils/const";
import styles from "./top-rank-merchants-table.module.css";

interface TopRankMerchantsTableProps {
  data: MerchantInfo[];
}

function TopRankMerchantsTable({ data }: TopRankMerchantsTableProps) {
  const rankedData = getTopNByTotalAmount(data, 5);

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
        {rankedData.map((item, index) => {
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
