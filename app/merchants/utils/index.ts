import { Merchant } from "@/app/types/merchants";

export enum DropdownMenu {
  MCHT_NAME = "상호명",
  MCHT_STATUS = "가게 상태",
  MCHT_TYPE = "가게 업종",
}

export enum MerchantStatus {
  ACTIVE = "ACTIVE",
  READY = "READY",
  INACTIVE = "INACTIVE",
  CLOSED = "CLOSED",
}

export enum MerchantType {
  CAFE = "CAFE",
  RESTAURANT = "RESTAURANT",
  MART = "MART",
  ETC = "ETC",
}

export const STATUS_ORDER: Record<MerchantStatus, number> = {
  [MerchantStatus.ACTIVE]: 1,
  [MerchantStatus.READY]: 2,
  [MerchantStatus.INACTIVE]: 3,
  [MerchantStatus.CLOSED]: 4,
};

export const sortedByDropdownMenu = (data: Merchant[], menu: string) => {
  const copyData = [...data];
  if (menu === DropdownMenu.MCHT_NAME) {
    copyData.sort((a, b) => a.mchtName.localeCompare(b.mchtName));
  } else if (menu === DropdownMenu.MCHT_STATUS) {
    copyData.sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);
  } else if (menu === DropdownMenu.MCHT_TYPE) {
    copyData.sort((a, b) => a.bizType.localeCompare(b.bizType));
  }

  return copyData;
};
