const router = require("express").Router();
const fs = require("fs");
const notesArray = require("../../db/db.json");
const { nanoid } = require("nanoid");
// const { v4: uuidv4 } = require("uuid");
const {
  getNotes,
  createNote,
  deleteNote,
  validateNote,
} = require("../../lib/notes");
const { json } = require("express/lib/response");

//get all notes
router.get("/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(notes);
});

//create notes
router.post("/notes", (req, res) => {
  const note = createNote(req.body);
  res.json(note);
  // if (err) {
  //   res.status(500).json(err);
  // }
});

// deleteNotes;
router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id);
  res.json;
});

module.exports = router;
