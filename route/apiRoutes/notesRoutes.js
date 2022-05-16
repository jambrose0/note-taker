const router = require("express").Router();
const {
  getNotes,
  createNote,
  deleteNote,
  validateNote,
} = require("../../lib/notes");
const { notes } = require("../../db/db.json");
const { nanoid } = require("nanoid");

//get all notes
router.get("/notes", (req, res) => {
  let results = notes;
  if (req) {
    res.json(getNotes());
  } else {
    res.status(404);
  }
});

//create notes
router.post("/notes", (req, res) => {
  model.id = nanoid(12);
  if (!validateNote(req.body)) {
    res.status(400).send("note must have a title and body");
  } else {
    const note = createNote(req.body);
    res.json(note);
  }
});

//deleteNotes
router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id);
  res.json;
});

module.exports = router;
