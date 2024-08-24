'use server'
import { AnimalFormSchema, AnimalFormSchemaType } from '@/lib/schema'
import { Status } from '@prisma/client'
import prisma from '../db'

import { revalidatePath } from 'next/cache'

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

    const res = await prisma.animal.create({
      data: { ...data, image: '', status: data.status as Status },
    })
    return res
  } catch (error) {
    console.error('error in sending animal data', error)
  }
}

export async function uploadImage(img: string, id: string) {
  try {
    const res = await prisma.animal.update({
      where: { id },
      data: { image: img },
    })
    return res
  } catch (error) {
    console.log('error in updating', error)
  }
}
