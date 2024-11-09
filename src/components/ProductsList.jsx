import {  useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const retriveData = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=6`
  );
  return response;
};


export default function ProductsList({ handleDetails }) {
  const [page, setPage] = useState(1);
  const qyeryClient = useQueryClient()
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retriveData,
    staleTime: 10000,
  });
  const handleDelete = async (id)=>{
    await axios.delete(`http://localhost:3000/products/${id}`)
    qyeryClient.invalidateQueries(["products"])
  }
  if (isLoading) return <div>Fetching Products...</div>;
  if (error) return <div>An error occured: {error.message}</div>;
  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {products.data.data &&
          products.data.data.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border rounded-sm"
            >
              <img
                className="object-cover h-64 w-96 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl my-3">{product.title}</p>
              <button
                className="bg-blue-600 mx-10 p-3 rounded-lg text-lime-50 hover:bg-blue-500"
                onClick={() => handleDetails(product)}
              >
                show Details
              </button>
              <button
                className="bg-red-600 mx-10 p-3 rounded-lg text-lime-50 hover:bg-blue-500"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>

      <h1>hey</h1>
      <div className="flex">
        {page > 1 && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
        )}
        {products.data && products.data.data.length === 6 && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
