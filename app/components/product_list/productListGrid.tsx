import Image from "next/image";

// Remove after DB is made
const sampleProducts = [
    {
        product_id: 1,
        product_name: "Sample One",
        product_price: 9.55,
        product_description: "Example of a card One.",
        category_id: "Things", // These will display the names instead of keys until the db is up
        artisan_id: "Sarah Wheatly",
    },
    {
        product_id: 2,
        product_name: "Sample Two",
        product_price: 2.50,
        product_description: "Example of a card Two.",
        category_id: "Things",
        artisan_id: "Bob Clark",
    },
    {
        product_id: 3,
        product_name: "Sample Three",
        product_price: 25.00,
        product_description: "Example of a card Three.",
        category_id: "Stuff",
        artisan_id: "Sarah Wheatly",
    },
    {
        product_id: 4,
        product_name: "Sample Four",
        product_price: 21.55,
        product_description: "Example of a card Four.",
        category_id: "Objects",
        artisan_id: "Bob Clark",
    },
    {
        product_id: 5,
        product_name: "Sample Five",
        product_price: 15.55,
        product_description: "Example of a card Five.",
        category_id: "Shapes",
        artisan_id: "Bob Clark",
    },
    {
        product_id: 6,
        product_name: "Sample Six",
        product_price: 10.00,
        product_description: "Example of a card Six.",
        category_id: "colors",
        artisan_id: "Marshal Law",
    },
];
// End of what needs to be removed

interface ProductListGridProps {
    artisan: string;
    category: string;
    pricerange: string;
};

export default function ProductListGrid({ artisan, category, pricerange }: ProductListGridProps) {
    let data = sampleProducts; // Change this to a db call later
    const ranges = pricerange.split('-').map(Number);
    // Sort the list

    console.log(`${artisan} ${category} ${pricerange}`);
    if (artisan) {
       data = data.filter(item => item.artisan_id.toLowerCase() === artisan); 
    };

    if (category) {
        data = data.filter(item => item.category_id.toLowerCase() === category);
    };

    if (pricerange) {
        data = data.filter(item => item.product_price >= ranges[0]);
        data = data.filter(item => item.product_price <= ranges[1]);
    };

    // Sort by price before you send it in (lowest to highest price)
    data = data.sort((a, b) => a.product_price - b.product_price)

    return (
        <div className="grid grid-cols-3 gap-6 p-3">
            {data.map(item => (
                <div key={item.product_id} className="shadow-xl flex flex-col gap-5 rounded-md md:w-full md:h-full">
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
                        <p><b>Artisan:</b> {item.artisan_id}</p>
                        <p><b>Category:</b> {item.category_id}</p>
                        <p><b>Price:</b> ${item.product_price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};