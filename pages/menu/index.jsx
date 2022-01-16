import React, { useState, useEffect } from 'react'
import Drink from '../../components/menu/Drink'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { db } from '../../firebase/clientApp'
import { collection, onSnapshot, getDocs } from 'firebase/firestore'

const Menu = () => {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    onSnapshot(collection(db, "menu"), (snapshot) => {
      setMenus(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  }, [])
  

  return (
    <>
      <Head>
        <title>Menu: Cortado Cafe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Start your day with a smile." />
      </Head>

      <div className="mx-6">
        <div className='flex p-6 space-x-5 justify-center border-b-2'>
          <h1 className='font-bold text-3xl'>Menu</h1>
        </div>
        <div className="flex-grow my-10 flex justify-center items-center">
          <div className='grid lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2'>
              {menus.map(menu => (
                <Link href={'/menu/' + menu.id}>
                  <a>
                    <Drink name={menu.name} description={menu.description} imageUrl={menu.imageUrl}/>
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
