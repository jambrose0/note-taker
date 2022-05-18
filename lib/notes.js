const fs = require("fs");
const path = require("path");
let notesArray = require("../db/db.json");
const { nanoid } = require("nanoid");
const res = require("express/lib/response");

//get notes
const getNotes = () => {
  return notesArray;
};

//create notes
const createNote = (body) => {
  const { title, text } = body;

  if (!title || !text) {
    throw new Error("Note 'title' and 'text' cannot be blank");
  }

  const newNote = { title, text, id: nanoid(12) };

  let notes = [JSON.parse(fs.readFileSync("./db/db.json"))];

  notes.push(newNote);
  console.log(notes);
  console.log(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  return newNote;
};

//delete notes
const deleteNote = (body) => {
  // const { id } = req.params;
  const clearNote = notesArray.filter((currentNote) => currentNote.id != id);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notesArray }, null, 2)
  );
};

//validates notes

const validateNote = (body) => {
  if (!body.title || body.text) {
    return false;
  }

  return true;
};

module.exports = { getNotes, createNote, validateNote, deleteNote };
