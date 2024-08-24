import z from 'zod'

export const AnimalFormSchema = z.object({
  name: z.string(),
  weight: z.coerce.number().positive(),
  height: z.coerce.number().int().positive(),
  age: z.coerce.number().int().nonnegative(),
  DOB: z.date(),
  Location: z.string().min(8, 'Location should be minimum of 8 characters'),
  lastHealthCheckOn: z.date(),
  Diseases: z.string(),
  status: z.string().default('HAPPY'),
})

export type AnimalFormSchemaType = z.infer<typeof AnimalFormSchema>

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  email: z.string().email(),
  subject: z.string().min(8, { message: 'Please enter your subject' }),
  message: z.string().min(8, { message: 'Please enter your message' }),
})

export type contactFormSchemaType = z.infer<typeof contactFormSchema>
