import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
        return;
      }
      const loginRes = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const user = await loginRes.json();
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("currentUser", user.name);
      navigate("/home");
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 p-6">
        <h2 className="text-center text-2xl font-semibold text-gray-900">Create account</h2>
        <form className="mt-6 space-y-4" onSubmit={handleRegister}>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-gray-500"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-gray-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-gray-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-gray-500"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full rounded-lg bg-black py-2 font-medium text-white hover:bg-gray-800">
            Sign up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-black underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
