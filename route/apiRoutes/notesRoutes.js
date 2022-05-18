const router = require("express").Router();
const notesArray = require("../../db/db.json");
const { nanoid } = require("nanoid");
// const { v4: uuidv4 } = require("uuid");
const {
  getNotes,
  createNote,
  deleteNote,
  validateNote,
} = require("../../lib/notes");

//get all notes
router.get("/notes", (req, res) => {
  let results = notesArray;
  res.json(results);
});

//create notes
router.post("/notes", (req, res) => {
  const note = createNote(req.body);
  res.json(note);
  // if (err) {
  //   res.status(500).json(err);
  // }
});

//deleteNotes
router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id);
  res.json;
});

module.exports = router;
