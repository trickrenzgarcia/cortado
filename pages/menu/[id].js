export const getStaticPaths = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const paths = data.map(drink => {
    return {
      params: { id: drink.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async (context) => {

  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const data = await res.json()

  return {
    props: { drink: data }
  }

}

const Item = ({ drink }) => {
  return (
    <div>
      <h1>{drink.title}</h1>
      <p>{drink.body}</p>
    </div>
  )
}

export default Item
