import { getMerchantsListUrl } from "../api/merchants";
import MerchantList from "./components/merchant-list";

async function getMerchants() {
  const response = await fetch(getMerchantsListUrl);
  if (!response.ok) {
    throw new Error("[Error] 가맹저 리스트를 불러올 수 없습니다.");
  }
  return response.json();
}

async function MerchantsPage() {
  const merchants = await getMerchants();
  const data = merchants.data;

  return <MerchantList data={data} />;
}

export default MerchantsPage;
