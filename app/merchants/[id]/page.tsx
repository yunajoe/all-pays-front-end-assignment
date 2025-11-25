import { getMerchantDetailUrl } from "@/app/api/merchants";
import MerchantItem from "./components/merchant-item";

interface MerchantsDetailPageProps {
  params: Promise<{ id: string }>;
}

async function getMerchant(id: string) {
  const url = getMerchantDetailUrl(id);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("[Error] 가맹점 상세 정보를 불러올 수 없습니다.");
  }
  return response.json();
}

async function MerchantsDetailPage({ params }: MerchantsDetailPageProps) {
  const { id } = await params;
  const merchants = await getMerchant(id);
  const data = merchants.data;

  return <MerchantItem data={data} />;
}

export default MerchantsDetailPage;
