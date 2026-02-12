import ProductListFilter from "../components/product_list/productListFilter";
import ProductListGrid from "../components/product_list/productListGrid";

// Remove after DB is made
const sampleCategorys = [
    {
        category_id: 1,
        category_name: "Things",
    },
    {
        category_id: 2,
        category_name: "Stuff",
    },
    {
        category_id: 3,
        category_name: "Objects",
    },
    {
        category_id: 4,
        category_name: "Shapes",
    },
    {
        category_id: 5,
        category_name: "Colors",
    },
];

const sampleArtisans = [
    {
        artisan_id: 1,
        artisan_name: "Sarah Wheatly",
    },
    {
        artisan_id: 2,
        artisan_name: "Bob Clark",
    },
    {
        artisan_id: 3,
        artisan_name: "Marshal Law",
    },
];
// End of what needs to be removed

export default async function ProductListPage(props: {
    searchParams?: Promise<{
        artisan?: string;
        category?: string;
        pricerange?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const artisan = searchParams?.artisan || '';
    const category = searchParams?.category || '';
    const pricerange = searchParams?.pricerange || '';

    return (
        <div className="flex flex-col items-center justify-center py-10 px-[10vw]">
            <h1 className="my-5">Product List</h1>
            <ProductListFilter categories={sampleCategorys} artisans={sampleArtisans} />
            <ProductListGrid artisan={artisan} category={category} pricerange={pricerange} />
        </div>
    );
};