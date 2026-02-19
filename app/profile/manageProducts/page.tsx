import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getProductsByArtisanId } from "@/app/lib/data";
import ManageProductList from "@/app/components/product/manage-list";

export default async function MyProductsPage() {
  const session = await auth();

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect("/login");
  }

  // Check if user has an artisan_id
  const userArtisanId = session.user && 'artisan_id' in session.user 
    ? (session.user as { artisan_id?: string }).artisan_id 
    : undefined;
  
  if (!userArtisanId) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          My Products
        </h1>
        <div className="text-center py-8 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-gray-700 mb-4">
            You need to be registered as an artisan to manage products.
          </p>
          <p className="text-sm text-gray-600">
            Please contact support to set up your artisan account.
          </p>
        </div>
      </div>
    );
  }

  // Fetch products for this artisan
  const products = await getProductsByArtisanId(userArtisanId);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Products</h1>
        <a
          href="/profile/addProduct"
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Add New Product
        </a>
      </div>

      <ManageProductList products={products} />

      <div className="mt-6 text-center">
        <a href="/profile" className="text-emerald-700 hover:underline">
          ← Back to Profile
        </a>
      </div>
    </div>
  );
}