'use client'
import dynamic from 'next/dynamic'

const DynamicGoogleMap = dynamic(() => import('@/components/DynamicGoogleMap'), { ssr: false })

export default function ClientMapWrapper({ locationName }: { locationName?: string }) {
  return <DynamicGoogleMap locationName={locationName} />
}
