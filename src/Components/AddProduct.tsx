import { useAddNewProductMutation } from "../App/Service/apiData"

const AddProduct = () => {
  const [AddProduct, { error, isLoading, data }] = useAddNewProductMutation()

  const handleAddProduct = async () => {
    try {
      await AddProduct({
        id: 12,
        title: "New Products",
        decription: "lokjbd asdhasdjnsdaj assdas",
      })
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
        className="px-4 mt-10 bg-slate-700 rounded-xl"
      >
        Add Products
      </button>
      <p>{data?.title}</p>
    </div>
  )
}

export default AddProduct
