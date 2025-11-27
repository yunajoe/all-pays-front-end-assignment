import { getMerchantsDetailListUrl } from "../api/merchants";
import { getPaymentsListUrl } from "../api/payments";
import KpiContainer from "./components/kpi/kpi-container";
import MerchantContainer from "./components/merchant/merchant-container";
import PaymentMethodContainer from "./components/payment/payment-method-container";
import styles from "./dashboard.module.css";

async function getData() {
  const [paymentsResponse, merchantsDetailResponse] = await Promise.all([
    fetch(getPaymentsListUrl, { next: { revalidate: 10 } }),
    fetch(getMerchantsDetailListUrl, { next: { revalidate: 10 } }),
  ]);
  if (!paymentsResponse.ok) {
    throw new Error("[Error] 거래 내역 정보를 불러올 수 없습니다.");
  }
  if (!merchantsDetailResponse.ok) {
    throw new Error("[Error] 가맹점 상세 정보를 불러올 수 없습니다.");
  }

  const [paymentsData, merchantsDetailData] = await Promise.all([
    paymentsResponse.json(),
    merchantsDetailResponse.json(),
  ]);
  return { paymentsData, merchantsDetailData };
}

async function DashBoardPage() {
  const { paymentsData, merchantsDetailData } = await getData();
  const paymentsInfo = paymentsData.data;
  const merchantsDetailInfo = merchantsDetailData.data;

  return (
    <div className={styles.container}>
      <KpiContainer data={paymentsInfo} />
      <PaymentMethodContainer data={paymentsInfo} />
      <MerchantContainer
        paymentsInfo={paymentsInfo}
        merchantsDetailInfo={merchantsDetailInfo}
      />
    </div>
  );
}

export default DashBoardPage;
