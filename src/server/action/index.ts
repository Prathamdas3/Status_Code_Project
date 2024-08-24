'use server'
import {
  AnimalFormSchema,
  AnimalFormSchemaType,
  contactFormSchema,
  contactFormSchemaType,
} from '@/lib/schema'
import { Status } from '@prisma/client'
import prisma from '../db'

import { Resend } from 'resend'
import { revalidatePath } from 'next/cache'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function getAnimals() {
  try {
    const data = await prisma.animal.findMany()
    revalidatePath('/')
    return data
  } catch (error) {
    console.log('error in getting the animal', error)
  }
}
export async function getAnimal(id: string) {
  try {
  } catch (error) {
    console.log('error in getting the animal', error)
  }
}

export async function createAnimal(formData: AnimalFormSchemaType) {
  try {
    const { error, data, success } = AnimalFormSchema.safeParse(formData)
    if (!success) {
      return { message: 'Invalid Input', status: 400, error }
    }

    await prisma.animal.create({
      data: { ...data, image: '', status: data.status as Status },
    })
  } catch (error) {
    console.error('error in sending animal data', error)
  }
}

export async function updateAnimal(formData: AnimalFormSchemaType) {
  try {
    console.log(formData)
  } catch (error) {
    console.log('error in updating', error)
  }
}
