import { db } from '../../../firebase/clientApp'
import { collection, getDocs, query, where } from 'firebase/firestore'

export default async (req, res) => {
  try {
    const { id } = req.body
    const menu = query(collection(db, "menu"))
    const menuSnapshot = await getDocs(menu)
    const menuData = menuSnapshot.docs.map((doc) => ({
      ids: doc.id,
      ...doc.data()
    }))

    if(menuData.some(menu => menu.ids === id)){
      
    } else {
      res.status(200).json(menuData)
    }
  } catch (error) {
    console.log(error)
  }
  res.status(200).json()
}