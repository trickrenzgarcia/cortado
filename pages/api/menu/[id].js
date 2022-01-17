import { doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase/clientApp'

export default async function menuHandler(req, res) {
  const { id, name, description } = req.query

  try {
    if(req.method === 'PUT') {
      await updateDoc(doc(db, "menu", id), {
        name: name,
        description: description
      })
    } else if(req.method === 'GET') {
      const docRef = doc(db, "menu", id)
      const docSnapshot = await getDoc(docRef)
      if(!docSnapshot.exists) {
        res.status(404).end()
      } else {
        res.status(200).json(docSnapshot.data())
      }
    } else if(req.method === 'DELETE') {
      await deleteDoc(doc(db, "menu", id))
    }
    res.status(200).end()
  }
  catch (error) {
    res.status(400).end()
  }

}