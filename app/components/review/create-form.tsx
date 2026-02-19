import { createReview } from "@/app/lib/actions";
import { useActionState } from "react";
import { ReviewState } from "@/app/lib/states";
export default function Form({ product_id }: { product_id: string }) {
  const initialState: ReviewState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createReview, initialState);
  return (
    <form
      action={formAction}
      className="max-w-md mx-auto p-6 border rounded mt-8"
    >
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Add Review
      </h1>
      <label htmlFor="email" className="block text-sm font-medium mb-1">
        Email{" "}
      </label>
      <input
        id="email"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Email"
        name="email"
      />

      <label htmlFor="rating" className="block text-sm font-medium mb-1">
        Rating{" "}
      </label>
      <input
        id="rating"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Rating"
        name="rating"
      />
      <label htmlFor="description" className="block text-sm font-medium mb-1">
        Review
      </label>
      <textarea
        id="description"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Text..."
        name="description"
      />
      <input
        type="text"
        name="product_id"
        id="product_id"
        defaultValue={product_id}
        hidden
      />
      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
      >
        Add Review
      </button>
    </form>
  );
}
