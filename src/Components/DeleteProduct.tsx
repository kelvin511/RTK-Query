import { useDeleteProductMutation } from "../App/Service/apiData"

const DeleteProduct = () => {
  const [DeleteProduct, { error, isLoading, data }] = useDeleteProductMutation()

  const handleAddProduct = async () => {
    try {
      await DeleteProduct(12)
    } catch (err) {
      console.log(err)
    }
  }

  if (error) {
    return <h1 className="text-4xl text-center ">Error Occured</h1>
  }
  if (isLoading) {
    return <h1 className="text-4xl text-center ">Loading...</h1>
  }
  return (
    <div className="text-4xl text-center ">
      <br />
      <button
        onClick={handleAddProduct}
        className="px-6 py-2 mt-10 bg-slate-500 rounded-xl"
      >
        Delete Products
      </button>
      <p>{data?.title}</p>
    </div>
  )
}

export default DeleteProduct
