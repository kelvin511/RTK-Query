import { useGetAllProductsQuery } from "../App/Service/apiData"

const AllProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery("")
  console.log(data, error, isLoading)

  if (error) {
    return <h1 className="text-4xl text-center ">Error Occured</h1>
  }
  if (isLoading) {
    return <h1 className="text-4xl text-center ">Loading...</h1>
  }

  return (
    <div className="text-4xl text-center ">
      <h1>All Products</h1>
      {data?.products.map((obj: any) => (
        <div className="flex flex-col flex-wrap items-center justify-center mt-4 text-2xl ">
          <img className="h-1/2" src={obj.thumbnail} alt="" />
          <p>{obj.title}</p>
          <p>{obj.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AllProducts
