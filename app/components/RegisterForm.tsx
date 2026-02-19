"use client";

import { createUser } from "../lib/actions";
import { useActionState } from "react";
import { UserState } from "../lib/states";
export default function RegisterForm() {
  const initialState: UserState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createUser, initialState);

  return (
    <section className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Artisan Registration
      </h1>

      <p className="text-sm text-gray-500 text-center mt-2">
        Create an account to start selling your handcrafted items
      </p>

      <form action={formAction} className="mt-6 space-y-4">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstname"
            name="firstname"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <div id="firstname-error" aria-live="polite" aria-atomic="true">
            {state.errors?.firstname &&
              state.errors.firstname.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>{" "}
        </div>
        {/* Last Name */}
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastname"
            name="lastname"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <div id="lastname-error" aria-live="polite" aria-atomic="true">
            {state.errors?.lastname &&
              state.errors.lastname.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <div id="username-error" aria-live="polite" aria-atomic="true">
            {state.errors?.username &&
              state.errors.username.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

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
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
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
            minLength={6}
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Description */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            About you / Your craft
          </label>
          <textarea
            name="artisan_id"
            value={form.artisan_id}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-600"
            placeholder="Tell customers about your craft..."
          />
        </div> */}
        {/* Name */}
        <div>
          <label
            htmlFor="artisan_id"
            className="block text-sm font-medium text-gray-700"
          >
            Artisan ID
          </label>
          <input
            id="artisan_id"
            name="artisan_id"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <div id="artisan_id-error" aria-live="polite" aria-atomic="true">
            {state.errors?.artisan_id &&
              state.errors.artisan_id.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Error */}
        {/* {error && <p className="text-sm text-red-600">{error}</p>} */}

        {/* Button */}
        <button
          type="submit"
          // disabled={loading}
          className="w-full bg-emerald-700 text-white py-2 rounded-md font-medium hover:bg-emerald-800 transition disabled:opacity-50"
        >
          Register {/* {loading ? "Creating account..." : "Register"} */}
        </button>
      </form>

      <p className="text-sm text-center text-gray-500 mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-emerald-700 hover:underline">
          Login
        </a>
      </p>
    </section>
  );
}
