import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Escuchando en el puerto", app.get("puerto"));
});
