import { MerchantListItem } from "@/app/types/merchants";
import { Payment } from "@/app/types/payment";
import { calculateMerchandisesStackBarData } from "../../utils";
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
  console.log("maapignDAta", merchatMappingData);
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Top 5 가맹점 분석</h3>
      </div>
      <div>
        <h3 className={styles.subTitle}>가맹점열 결제 금액 비교</h3>
      </div>
    </div>
  );
}

export default MerchantContainer;

/**
 * 결제 리스트의 mchtcode를로 status success인 상태을 기본으로 한다.
 *
 */

//[{paymenetCode: "MCHT-MART-003", "merchantName": "스마트점 강남점", }, {"총 결제 금액":}, {"결제 건수": ""}]
