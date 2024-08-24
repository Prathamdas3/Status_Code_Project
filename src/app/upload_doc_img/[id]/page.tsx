'use client'

import * as React from 'react'
import { useEdgeStore } from '@/lib/edgestore'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { uploadImage } from '@/server/action'

export default function Page({ params }: { params: { id: string } }) {
  const [file, setFile] = React.useState<File>()
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
