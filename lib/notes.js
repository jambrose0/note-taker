const fs = require("fs");
const path = require("path");
let notesArray = require("../db/db.json");
const { nanoid } = require("nanoid");

//get notes
const getNotes = () => {
  return notesArray;
};
// function getNotes(body, notesArray) {
//   return notesArray;
// }

//create notes
const createNote = (body) => {
  const { title, text } = body;

  if (!title || !text) {
    throw new Error("Note 'title' and 'text' cannot be blank");
  }

  const newNote = { title, text, id: nanoid(12) };

  let notes = JSON.parse(fs.readFileSync("./db/db.json"));

  notes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  return newNote;
};

// function createNote(body, notesArray) {
//   const note = body;
//   notesArray.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, "../db/db.json"),
//     JSON.stringify({ notes: notesArray }),
//     null,
//     2
//   );
//   return note;
// }

//delete notes
const deleteNote = (id) => {
  const filteredData = notesArray.filter(
    (selectedNote) => selectedNote.id != id
  );
  notesArray = filteredData;
  console.log(filteredData);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
};
// function deleteNote(id, notesArray) {
//   const filteredData = notesArray.filter(
//     (selectedNote) => selectedNote.id != id
//   );
//   notesArray = filteredData;
//   console.log(filteredData);

//   fs.writeFileSync(
//     path.join(__dirname, "../db/db.json"),
//     JSON.stringify(notesArray, null, 2)
//   );
// }

//validates notes
const validateNote = (body) => {
  if (!body.title || body.text) {
    return false;
  }

  return true;
};

module.exports = { getNotes, createNote, validateNote, deleteNote };
