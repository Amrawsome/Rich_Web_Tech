import React, { useState, useEffect } from 'react';

const NoteApp = () => {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    // Clear the localStorage 
    localStorage.removeItem('notes');

    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNote(JSON.parse(storedNotes));
    }
  }, []);

  const updateDB = () => {
    // Store the notes as a JSON string in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  //add notes
  const addNote = () => {
    const newNote = {
      key: Math.random() * 1000000000000000000000000000000000000,
      backgroundColor: 'white', // default color
    };
    setNote(prevNotes => [...prevNotes, newNote]);
    updateDB();
  };

  const deleteNote = (key) => {
    const updatedNotes = notes.filter((note) => note.key !== key);
    setNote(updatedNotes);
    updateDB();
  };

  const noteChange = () => {
    updateDB();
  };
  //changes color based on option/output picked
  const colorChange = (e, key) => {
    const output = e.target.value;
    setNote((prevNotes) => {
      const updatedNotes = prevNotes.map((note) => {
        if (note.key === key) {
          return {
            ...note,
            backgroundColor: output,
          };
        }
        return note;
      });
      return updatedNotes;
    });
    updateDB();
  };
  //jsx for react dom elements
  return (
    <div className="tainer">
      <button className="add" onClick={addNote}>
        Add note
      </button>
      <div className="note" onClick={noteChange}>
        {notes.map((note) => (
          <div
            className="n-input"
            contentEditable="true"
            suppressContentEditableWarning={true}
            key={note.key}
            style={{ backgroundColor: note.backgroundColor }}
          >
            <img
              className="delete"
              src="icons8-bin-24.png"
              alt="Delete"
              onClick={() => deleteNote(note.key)}
            />
            <select
              className="colors"
              id={`colid-${note.key}`}
              value={note.backgroundColor}
              onChange={(e) => colorChange(e, note.key)}
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteApp;
