import { BASE_URL } from "..";
// BASE URL =>  https://recruit.paysbypays.com/api/v1

// 가맹점 목록 조회
// https://recruit.paysbypays.com/api/v1/merchants/list
// 가맹점 상세 조회
// https://recruit.paysbypays.com/api/v1/merchants/details

// 가맹점 코드로 특정 가맹점 상세 조회
// https://recruit.paysbypays.com/api/v1/merchants/details/MCHT-SHOP-003

export const getMerchantsListUrl = `${BASE_URL}/merchants/list`;

export const getMerchantsDetailUrl = `${BASE_URL}/v1/merchants/details`;
