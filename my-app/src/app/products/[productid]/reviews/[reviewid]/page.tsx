export default function Review({
  params,
}: {
  params: { productid: string; reviewid: string };
}) {
  return (
    <>
      <h1>Product Review {params.reviewid}</h1>
    </>
  );
}
