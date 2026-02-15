import Image from "next/image";
import { Product, Artisan, Category } from "@/app/lib/definitions";
interface ProductListGridProps {
  artisan: string;
  category: string;
  pricerange: string;
  products: Product[];
}

export default function ProductListGrid({
  artisan,
  category,
  pricerange,
  products,
}: ProductListGridProps) {
  const ranges = pricerange.split("-").map(Number);
  // Sort the list

  if (artisan) {
    products = products.filter(
      (item) => item.artisan_name.toLowerCase() === artisan,
    );
  }

  if (category) {
    products = products.filter(
      (item) => item.category_name.toLowerCase() === category,
    );
  }

  if (pricerange) {
    products = products.filter((item) => item.price >= ranges[0]);
    products = products.filter((item) => item.price <= ranges[1]);
  }

  // Sort by price before you send it in (lowest to highest price)
  products = products.sort((a, b) => a.price - b.price);

  return (
    <div className="grid grid-cols-3 gap-6 p-3">
      {products.map((item) => (
        <div
          key={item.id}
          className="shadow-xl flex flex-col gap-5 rounded-md md:w-full md:h-full"
        >
          <div>
            <Image
              src="/test.jpg"
              alt="Handcraft business picture"
              width={2560}
              height={3840}
              className="shadow-xl rounded-t-md h-full w-full"
            />
          </div>
          <div className="h-1/3 p-3">
            <p>
              <b>Artisan:</b> {item.artisan_name}
            </p>
            <p>
              <b>Category:</b> {item.category_name}
            </p>
            <p>
              <b>Price:</b> ${item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
