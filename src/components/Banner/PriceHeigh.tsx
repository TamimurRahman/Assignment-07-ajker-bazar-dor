
import Image from "next/image";
import React from "react";

const PriceHeigh = async() => {

  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
  const data =  await res.json();
  const priceHighProducts = data.filter(ph => ph.change.pct>0)
  console.log(priceHighProducts);
  return (
    <div>
      <div>
        {" "}
        <div>▲</div>
        <h1>আজ দাম বেড়েছে</h1>
      </div>

<div>
{priceHighProducts.map((h) => (
  <div key={h.id}>
    <span className="text-3xl">{h.image}</span>
    <h2>{h.nameBn}</h2>
    <p>দাম: {h.today} টাকা / {h.unit}</p>
  </div>
))}
</div>

    </div>
  );
};

export default PriceHeigh;
