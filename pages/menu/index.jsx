import React from 'react'
import Drink from '../../components/menu/Drink'
import Link from 'next/link'

export const getStaticProps = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  const data = await res.json()

  return {
    props: { drinks: data }
  }
}

const Menu = ({ drinks }) => {
  return (
    <>
      <div className="mx-6">
        <div className='flex p-6  space-x-5 justify-center border-b-2'>
          <h1 className='font-bold text-3xl'>Menu</h1>
        </div>
        <div className="flex-grow my-10">
          <div className='grid lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2'>
              {drinks.map(drink => (
                <Link href={'/menu/' + drink.id}>
                  <a className='cursor-pointer'>
                    <Drink title={drink.title} body={drink.body}/>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default Menu
