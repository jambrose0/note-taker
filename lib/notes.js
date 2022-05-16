const fs = require("fs");
const path = require("path");
let { notesArray } = require("../db/db.json");

//get notes
const getNotes = () => {
  return notesArray;
};

//create notes
const createNote = (body) => {
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};
//delete notes
const deleteNote = (id) => {
  const filteredData = notesArray.filter(
    (selectedNote) => selectedNote.id != id
  );
  notesArray = filteredData;
  console.log(filteredData);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notesArray }, null, 2)
  );
};

//validates notes
const noteValidate = (note) => {
  if (!note.title || note.text) {
    return false;
  }

  return true;
};

module.exports = { getNotes, createNote, noteValidate };
