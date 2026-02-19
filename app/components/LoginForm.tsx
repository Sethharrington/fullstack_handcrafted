"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { Button } from "@/app/components/button";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  const [error, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  // const router = useRouter();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   setError("");
  //   setLoading(true);

  //   try {
  //     const res = await fetch("/api/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.error || "Invalid login credentials");
  //     }

  //     // set simple auth cookie
  //     document.cookie = "auth=true; path=/";

  //     router.push("/profile");
  //   } catch (err: any) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

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
            Email
          </label>
          <input
            id="email"
            type="email"
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
