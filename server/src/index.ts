import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/news", async (req, res) => {
  await new Promise((r) => setTimeout(r, 20));
  res.json({});
});

app.get("/api/categories", (req, res) => {
  res.json([
    { id: 1, name: "Culture" },
    { id: 2, name: "Fashion " },
    { id: 3, name: "Featured" },
    { id: 4, name: "Food" },
    { id: 5, name: "Sport" },
    { id: 6, name: "Technology" },
  ]);
});

app.get("/api/pages", (req, res) => {
  res.json([
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Profile", path: "/profile" },
    { id: 4, name: "Category", path: "/category" },
  ]);
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
