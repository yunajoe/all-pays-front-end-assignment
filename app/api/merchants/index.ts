import { BASE_URL } from "..";

export const getMerchantsListUrl = `${BASE_URL}/merchants/list`;

export const getMerchantsDetailListUrl = `${BASE_URL}/merchants/details`;

export const getMerchantDetailUrl = (merchantId: string) =>
  `${BASE_URL}/merchants/details/${merchantId}`;
