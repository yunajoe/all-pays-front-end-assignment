"use client";
import { Merchant } from "../../types/merchants";

interface MerchantListProps {
  data: Merchant[];
}

function MerchantList({ data }: MerchantListProps) {
  console.log("데이터 --->", data);
  return <div>merchant-list</div>;
}

export default MerchantList;
