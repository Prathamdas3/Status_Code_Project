'use client'

import { useEdgeStore } from '@/lib/edgestore'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { getAnimal, uploadImage } from '@/server/action'
import initialize from '@/components/form'
import { useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const [file, setFile] = useState<File>()
  const { edgestore } = useEdgeStore()
  const { id } = params
  const router = useRouter()

  return (
    <div className="min-h-screen flex justify-center items-center">
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => {
          setFile(e.target.files?.[0])
        }}
      />
      <Button
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log(progress)
              },
            })
            // you can run some server action or api here
            // to add the necessary data to your database
            const data = await getAnimal(id)
            if (!data?.name) return { message: 'name is undefined' }

            await uploadImage(res.url, id)
            router.push('/')
          }
        }}
      >
        Upload
      </Button>
    </div>
  )
}
