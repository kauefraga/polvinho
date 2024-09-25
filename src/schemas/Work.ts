import { z } from 'zod';

export const WorkFormSchema = z.object({
  name: z
    .string()
    .min(1, 'O nome deve ter pelo menos 1 caractere')
    .max(50, 'O nome deve ter menos que 50 caracteres'),
  description: z.string().optional(),
  clientContact: z.string().optional(),
  price: z.coerce.number().nonnegative(),
  // deadline: z.date().optional(),
  status: z.enum(['todo', 'doing', 'done']).default('todo'),
  paymentStatus: z.enum(['not paid', 'partial', 'paid']).default('not paid'),
});

export type WorkForm = z.infer<typeof WorkFormSchema>;

const WorkDataSchema = z.object({
  id: z.string().nanoid(),
  createdAt: z.date(),
});

export const WorkSchema = WorkDataSchema.merge(WorkFormSchema);
export type Work = z.infer<typeof WorkSchema>;
