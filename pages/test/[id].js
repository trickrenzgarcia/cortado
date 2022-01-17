import { collection, doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
export const getStaticPaths = async () => {
  let menus = []

  onSnapshot(collection(db, "menu"), (snapshot) => {
    menus.push(snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })))
  })

  const paths = menus.map((menu) => ({
    params: { id: menu.id},
  }))
  
  return {
    paths,
    fallback: true
  }

}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const docRef = doc(db, "menu", id)
  const docSnap = await getDoc(docRef)

  return {
    props: { item: docSnap.data() }
  }
}

const TestId = () => {
  return (
    <div>
      
    </div>
  )
}

export default TestId
