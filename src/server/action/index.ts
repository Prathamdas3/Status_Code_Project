'use server'
import { AnimalFormSchema, AnimalFormSchemaType } from '@/lib/schema'
import { Status } from '@prisma/client'
import prisma from '../db'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

type updatedAnimalSchema = AnimalFormSchemaType & {
  id: string
  image: string
}

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
    const data = await prisma.animal.findUnique({
      where: { id: id },
    })
    return data
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

export async function getAnimalCard() {
  try {
    const { userId } = auth()
    if (!userId) return { message: 'UserId is null' }

    const data = await prisma.card.findMany({ where: { userId: userId } })
    return data
  } catch (error: unknown) {
    console.log('error in getting the showcase card ', error)
  }
}

export async function createAnimalCard(formData: updatedAnimalSchema) {
  try {
    const { userId } = auth()
    if (!userId) return { message: 'UserId is null' }

    const data = await prisma.card.findMany({ where: { userId: userId } })

    await prisma.card.create({
      data: {
        userId: userId,
        price: 0.01,
        animalId: formData.id,
        status: formData.status as Status,
        ...formData,
      },
    })
  } catch (error: unknown) {
    console.error(error)
  }
}
