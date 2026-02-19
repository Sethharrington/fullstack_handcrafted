import LoginForm from "../components/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Suspense fallback="Loading login form...">
        <LoginForm />
      </Suspense>
    </main>
  );
}
