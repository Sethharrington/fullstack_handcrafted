import { createArtisan } from "@/app/lib/actions";

export default function Form() {
  return (
    <form
      action={createArtisan}
      className="max-w-md mx-auto p-6 border rounded mt-8"
    >
      <h1 className="text-2xl font-bold text-gray-800 text-center">Add Artisan</h1>

      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Artisan Name"
        name="name"
      />
      <textarea
        className="w-full p-2 mb-2 border rounded"
        placeholder="Artisan Description"
        name="description"
      />
      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
      >
        Add Artisan
      </button>
    </form>
  );
}
