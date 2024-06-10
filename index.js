import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ success: true, massage: "welcome to the emoji server" });
});
app.get("/users", (req, res) => {
  res.send({ success: true, users });
});

app.post("/users", (req, res) => {
  const character = req.body.character;
  const name = req.body.name;
  if (!name) {
    return res.send({
      success: false,
      massage: "u have to porvide a name in the body",
    });
  }

  const user = {
    id: users.length + 1,
    character,
    name,
  };
  users.push(user);

  res.send({ success: true, users });
});

app.use((error, req, res, next) => {
  res.send({ success: false, error: error.message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const users = [
  { id: 1, character: "😀", name: "Grinning Face" },
  { id: 2, character: "😂", name: "Face with Tears of Joy" },
  { id: 3, character: "😍", name: "Smiling Face with Heart-Eyes" },
  { id: 4, character: "🤔", name: "Thinking Face" },
  { id: 5, character: "😎", name: "Smiling Face with Sunglasses" },
  { id: 6, character: "🥳", name: "Partying Face" },
  { id: 7, character: "😢", name: "Crying Face" },
  { id: 8, character: "😡", name: "Pouting Face" },
  { id: 9, character: "🤗", name: "Hugging Face" },
  { id: 10, character: "😴", name: "Sleeping Face" },
];
