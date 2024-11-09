export default function ProductDetails({ data }) {
 
  console.log(data);
  return (

    <div className="fixed">
      <h1>{data.title}</h1>
    </div>
  );
}
