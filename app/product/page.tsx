import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-xl font-bold">Details Page</h1>
      <div className="grid grid-cols-2 mt-6 ">
        <div>
          <Image
            src="/images/handcrafted_reindeer.webp"
            alt="logo"
            width={500}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-2 ml-6">
          <h2 className="text-xl font-semibold">Reindeer Doll</h2>
          <hr />

          <p>
            <span className="text-x2 font-semibold">Description: </span>
            Handmade reindeer doll made from natural materials.
          </p>
          <p>
            <span className="text-x2 font-semibold">Price: </span>$
            {Intl.NumberFormat("en-US").format(50)}
          </p>
          <p>
            <span className="text-x2 font-semibold">Artisan: </span>
            Mary Johnson
          </p>
          <p>
            <span className="text-x2 font-semibold">Category: </span>
            Toys
          </p>
        </div>
      </div>
    </div>
  );
}
