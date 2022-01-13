import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <h1 className='text-4xl'>Oooopss.</h1>
      <h1 className='text-6xl font-semibold'>404 not found</h1>
      <p className='text-2xl'>Go back to the <Link href='/'><a className='text-blue-500'>Homepage</a></Link></p>
    </div>
  )
}

export default NotFound