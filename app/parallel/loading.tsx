import Loader from '@/components/Loader'

export default async function Loading() {
  return (
    <Loader
      size={100}
      className="fixed"
    />
  )
}
