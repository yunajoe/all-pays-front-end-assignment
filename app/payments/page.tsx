import { getPaymentsListUrl } from "../api/payments";
import PaymentList from "./components/payment-list";

async function getPayments() {
  const response = await fetch(getPaymentsListUrl, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    throw new Error("[Error] 거래 내역 정보를 불러올 수 없습니다.");
  }
  return response.json();
}

async function PaymentsPage() {
  const payments = await getPayments();
  const data = payments.data;
  return <PaymentList data={data} />;
}

export default PaymentsPage;
