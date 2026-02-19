import ProductListFilter from "../components/product_list/productListFilter";
import ProductListGrid from "../components/product_list/productListGrid";

import { getArtisan, getCategory, getProductCard } from "@/app/lib/data";
// Remove after DB is made
const categoryList = await getCategory();
const artisanList = await getArtisan();
const productList = await getProductCard();
// End of what needs to be removed

export default async function ProductListPage(props: {
  searchParams?: Promise<{
    artisan?: string;
    category?: string;
    pricerange?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const artisan = searchParams?.artisan || "";
  const category = searchParams?.category || "";
  const pricerange = searchParams?.pricerange || "";

  return (
    <div className="flex flex-col items-center justify-center py-10 px-[10vw]">
      <h1 className="my-5 text-2xl font-bold text-gray-800 text-center">Product List</h1>
      <ProductListFilter categories={categoryList} artisans={artisanList} />
      <ProductListGrid
        artisan={artisan}
        category={category}
        pricerange={pricerange}
        products={productList}
      />
    </div>
  );
}
