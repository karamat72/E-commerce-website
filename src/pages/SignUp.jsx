import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await updateProfile(result.user, {
        displayName: name.trim(),
      });

      navigate("/");
    } catch (err) {
      setError(
        err.code === "auth/email-already-in-use"
          ? "This email is already registered. Please sign in."
          : err.code === "auth/invalid-email"
          ? "Please enter a valid email address."
          : "Account could not be created. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[75vh] bg-ivory px-4 py-12">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-7 shadow-soft sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-bronze">
          Welcome to FORMA
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-muted">
          Join us and discover thoughtful everyday essentials.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Full name
            </label>
            <input
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-xl border border-ink/15 px-4 py-3 outline-none focus:border-bronze"
            />
          </div>

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
              minLength={6}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
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
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-ink hover:text-bronze">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
export default SignIn;
```
