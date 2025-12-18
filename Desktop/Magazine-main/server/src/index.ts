import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let users: { name: string; email: string; password: string }[] = [];

app.get("/api/news", async (req, res) => {
  await new Promise((r) => setTimeout(r, 20));
  res.json({});
});

app.get("/api/categories", (req, res) => {
  res.json([
    { id: 1, name: "Culture" },
    { id: 2, name: "Fashion " },
    { id: 3, name: "Featured", path: "/single" },
    { id: 4, name: "Food" },
    { id: 5, name: "Sport", path: "/category" },
    { id: 6, name: "Technology" },
  ]);
});

app.get("/api/pages", (req, res) => {
  res.json([
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Profile Market", path: "/profile" },
  ]);
});

app.post("/api/users/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });
  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });
  users.push({ name, email, password });
  res.json({ message: "User registered successfully" });
});

app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user)
    return res.status(401).json({ message: "Invalid email or password" });
  res.json({ name: user.name, email: user.email });
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
