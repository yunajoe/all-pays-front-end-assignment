import { z } from "zod";

const MerchantSchema = z.object({
  mchtCode: z.string(),
  mchtName: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE", "CLOSED", "READY"]),
  bizType: z.enum(["CAFE", "SHOP", "MART", "APP", "TRAVEL", "EDU", "TEST"]),
});

export type Merchant = z.infer<typeof MerchantSchema>;

const MerchantListItemSchema = z.object({
  mchtCode: z.string(),
  mchtName: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE", "CLOSED", "READY"]),
  bizType: z.enum(["CAFE", "SHOP", "MART", "APP", "TRAVEL", "EDU", "TEST"]),
  bizNo: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string(),
  registeredAt: z.string(),
  updatedAt: z.string(),
});

export type MerchantListItem = z.infer<typeof MerchantListItemSchema>;
