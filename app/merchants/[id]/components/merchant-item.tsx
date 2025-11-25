"use client";
import { MerchantListItem } from "@/app/types/merchants";

interface MerchantItemProps {
  data: MerchantListItem;
}

function MerchantItem({ data }: MerchantItemProps) {
  console.log("데이터 입니다앙 ===>>", data);
  const {
    address,
    bizNo,
    bizType,
    email,
    mchtCode,
    mchtName,
    phone,
    status,
    registeredAt,
    updatedAt,
  } = data;
  return (
    <div>
      <h1>{mchtName}</h1>
    </div>
  );
}

export default MerchantItem;
