export default function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  return (
    <>
      <h1>Product Detail {params.productid}</h1>
    </>
  );
}
