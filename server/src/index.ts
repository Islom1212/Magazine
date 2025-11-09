import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/news", async (req, res) => {
  await new Promise(r => setTimeout(r, 20)); // 2 sec delay for loading
  res.json({}); 
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
