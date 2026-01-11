import express from "express";
import mysql from "mysql2/promise";
import multer from "multer";
import fs from "fs";
import YAML from "yaml";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();
const file = fs.readFileSync("./config.yaml", "utf8");
const config = YAML.parse(file);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// fájl feltöltés beállítás
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// MySQL pool
const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  port: config.database.port,
});

// Értékelés mentése
app.post("/api/reviews", upload.single("image"), async (req, res) => {
  const { name, review, rating } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !review || !rating)
    return res.status(400).json({ error: "Hiányzó adatok" });

  try {
    await pool.query(
      "INSERT INTO reviews (name, review, rating, image) VALUES (?, ?, ?, ?)",
      [name, review, rating, image]
    );
    res.json({ success: true });
  } catch (err) {
    console.error("DB hiba:", err);
    res.status(500).json({ error: "Adatbázis hiba" });
  }
});

// Értékelések lekérése
app.get("/api/reviews", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM reviews ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    console.error("Lekérési hiba:", err);
    res.status(500).json({ error: "Adatbázis hiba" });
  }
});

app.listen(config.server.port, () =>
  console.log(`✅ Server fut: http://localhost:${config.server.port}`)
);
