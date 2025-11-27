import { MerchantListItem } from "@/app/types/merchants";
import { Payment } from "@/app/types/payment";
import { calculateMerchandisesStackBarData } from "../../utils";
import TopRankMerchantsTable from "../table/top-rank-merchants-table";
import styles from "./merchant-container.module.css";

interface MerchantContainerProps {
  paymentsInfo: Payment[];
  merchantsDetailInfo: MerchantListItem[];
}

function MerchantContainer({
  paymentsInfo,
  merchantsDetailInfo,
}: MerchantContainerProps) {
  const merchatMappingData = calculateMerchandisesStackBarData(
    paymentsInfo,
    merchantsDetailInfo
  );
  const data = Object.values(merchatMappingData);
  return (
    <div className={styles.container}>
      <div className={styles.topRankTableContainer}>
        <h3 className={styles.title}>Top 5 가맹점 분석</h3>
        <TopRankMerchantsTable data={data} />
      </div>
      <div className={styles.chartContainer}>
        <h3 className={styles.subTitle}>가맹점열 결제 금액 비교</h3>
      </div>
    </div>
  );
}

export default MerchantContainer;
