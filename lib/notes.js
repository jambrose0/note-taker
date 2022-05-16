const fs = require("fs");
const path = require("path");
let notesArray = require("../db/db.json");

//get notes
const getNotes = () => {
  return notesArray;
};

//create notes
const createNote = (body) => {
  if (!notesArray) {
    notesArray = [];
  }
  notesArray.push(body);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
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
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
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
