import express from "express";
const app = express();
const port = 3000;
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ success: true, massage: "welcome to the emoji server" });
});
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.send({ success: true, users });
});

app.post("/users", async (req, res) => {
  const character = req.body.character;
  const name = req.body.name;
  if (!name) {
    return res.send({
      success: false,
      massage: "u have to porvide a name in the body",
    });
  }

  const user = await prisma.user.create({
    data: {
      name,
      character,
    },
  });

  res.send({ success: true, user });
});

app.use((error, req, res, next) => {
  res.send({ success: false, error: error.message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
