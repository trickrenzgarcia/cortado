
export const getStaticPaths = async () => {
  const { URL } = process.env

  const res = await fetch(URL + "/api/menu")

  const menus = await res.json()

  const paths = menus.map((menu) => ({
    params: { id: menu.ids},
  }))
  
  return {
    paths,
    fallback: true
  }

}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { URL } = process.env

  const res = await fetch(URL + '/api/menu/' + id)

  const menu = await res.json()

  return {
    props: { item: menu }
  }
}

const MenuItem = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
    </div>
  )
}

export default MenuItem
