import { z } from "zod";

const MerchantSchema = z.object({
  mchtCode: z.string(),
  mchtName: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE", "CLOSED", "READY"]),
  bizType: z.enum(["CAFE", "SHOP", "MART", "APP", "TRAVEL", "EDU", "TEST"]),
});

export type Merchant = z.infer<typeof MerchantSchema>;
