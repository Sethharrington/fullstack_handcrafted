"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  debugger;
  const [error, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <section className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Artisan Login
      </h1>

      <p className="text-sm text-gray-500 text-center mt-2">
        Sign in to manage your handcrafted products
      </p>

      <form action={formAction} className="mt-6 space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email or Username
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-emerald-700 text-white py-2 rounded-md font-medium hover:bg-emerald-800 transition disabled:opacity-50"
        >
          {isPending ? "Signing in..." : "Login"}
        </button>
      </form>

      <p className="text-sm text-center text-gray-500 mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-emerald-700 hover:underline">
          Register
        </a>
      </p>
    </section>
  );
}
