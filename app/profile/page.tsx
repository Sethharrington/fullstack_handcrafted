import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Welcome, {user.name || user.email}
      </h1>

      {/* User Info */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Profile Information</h2>
        {user.name && (
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
        )}
        {user.email && (
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-8 space-x-4">
        <a
          href="/profile/manageProducts"
          className="text-emerald-700 underline"
        >
          My Products
        </a>
        <a href="/profile/addProduct" className="text-emerald-700 underline">
          Add Product
        </a>
      </div>
    </div>
  );
}
