"use client";

import { MerchantListItem } from "@/app/types/merchants";
import { Payment } from "@/app/types/payment";
import { Bar } from "react-chartjs-2";
import {
  calculateMerchandisesStackBarData,
  getTopNByTotalAmount,
} from "../../utils";
import { TOP_N_MERCHANTS_STACK_BAR_DATA } from "../../utils/const";
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
  const rankedData = getTopNByTotalAmount(data, 5);
  const labels = rankedData.map((item) => item.mchtCode);

  const { options, result } = TOP_N_MERCHANTS_STACK_BAR_DATA(
    labels,
    merchatMappingData
  );

  return (
    <div className={styles.container}>
      <div className={styles.topRankTableContainer}>
        <h3 className={styles.title}>Top 5 가맹점 분석</h3>
        <TopRankMerchantsTable data={rankedData} />
      </div>
      <div className={styles.chartContainer}>
        <div>
          <h3 className={styles.subTitle}>가맹점열 결제 금액 비교</h3>
          <Bar options={options} data={result} />;
        </div>
      </div>
    </div>
  );
}

export default MerchantContainer;
