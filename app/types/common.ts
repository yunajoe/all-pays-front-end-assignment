import z from "zod";

export const PaymentTypeSchema = z.enum([
  "ONLINE",
  "DEVICE",
  "MOBILE",
  "VACT",
  "BILLING",
]);

export const PaymentStatusSchema = z.enum([
  "PENDING",
  "SUCCESS",
  "FAILED",
  "CANCELLED",
]);

export const MerchantsStatusSchema = z.enum([
  "READY",
  "ACTIVE",
  "INACTIVE",
  "CLOSED",
]);
