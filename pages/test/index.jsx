import axios from 'axios'
import { collection, onSnapshot } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase/clientApp'
import Drink from '../../components/menu/Drink'

const Test = () => {
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
    <div>
      {menus.map(menu => (
        <Link href={`/test/${menu.id}`}>
          <a onClick={async () => {
            await axios.get(`/api/menu/${menu.id}`)
          }}>
            <Drink name={menu.name} description={menu.description} />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Test
