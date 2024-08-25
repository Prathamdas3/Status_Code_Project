'use client'
import ContactForm from '@/components/forms/ContactForm'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default async function sanctuary() {
  const router = useRouter()
  useEffect(() => {
    router.push('/sanctuary/animal')
  })
  return <main>Hello</main>
}
