import { useGetProductsByIdQuery } from "../App/Service/apiData"

const SingleProduct = () => {
  const { data, error, isLoading } = useGetProductsByIdQuery(10)
  console.log(data, error, isLoading)

  if (error) {
    return <h1 className="text-4xl text-center ">Error Occured</h1>
  }
  if (isLoading) {
    return <h1 className="text-4xl text-center ">Loading...</h1>
  }

  return (
    <div className="text-4xl text-center ">
      SingleProduct
      <div className="text-2xl">
        <img src={data.thumbnail} alt="" />
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
      </div>
    </div>
  )
}

export default SingleProduct
