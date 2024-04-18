import React from "react";
import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: { productid: string; reviewid: string };
}) {
  if (parseInt(params.reviewid) > 100) {
    return notFound();
  }
  return (
    <>
      <h1>Product Review {params.reviewid}</h1>
    </>
  );
}
