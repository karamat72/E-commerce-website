```jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate("/");
    } catch (err) {
      setError(
        err.code === "auth/invalid-credential"
          ? "Incorrect email or password."
          : err.code === "auth/too-many-requests"
          ? "Too many attempts. Please try again later."
          : "Unable to sign in. Please check your details."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[75vh] bg-ivory px-4 py-12">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-bronze">
          Welcome back
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">
          Sign in to FORMA
        </h1>
        <p className="mt-2 text-sm text-muted">
          Access your account and continue shopping.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Email address
            </label>
            <input
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-ink/15 px-4 py-3 outline-none focus:border-bronze"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Password
            </label>
            <input
              required
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full rounded-xl border border-ink/15 px-4 py-3 outline-none focus:border-bronze"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-ink px-5 py-3 font-semibold text-white transition hover:bg-bronze disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          New to FORMA?{" "}
          <Link to="/signup" className="font-semibold text-ink hover:text-bronze">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
```
