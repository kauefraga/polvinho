import { z } from 'zod';

/* work in progress
  - deadline
  - progress (started, not started, almost done...)
  - paymentStatus
*/

export const WorkSchema = z.object({
  name: z.string().min(1, 'O nome deve ter pelo menos 1 caractere').max(50, 'O nome deve ter menos que 50 caracteres'),
  description: z.string().optional(),
  clientContact: z.string().optional(),
  price: z.coerce.number().nonnegative(),
});

export type WorkData = z.infer<typeof WorkSchema>;
