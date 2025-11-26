import { z } from "zod";
import { PaymentStatusSchema, PaymentTypeSchema } from "./common";

const PaymentSchema = z.object({
  paymentCode: z.string(),
  mchtCode: z.string(),
  amount: z.string(),
  currency: z.string(),
  payType: PaymentTypeSchema,
  status: PaymentStatusSchema,
  paymentAt: z.string(),
});

export type Payment = z.infer<typeof PaymentSchema>;
