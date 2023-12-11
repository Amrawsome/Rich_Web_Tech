import React, { useState, useEffect } from 'react';
import $ from 'jquery';
const NoteApp = () => {
  const [notes, setNote] = useState([]);
  const [fact, setFact] = useState('');
  //retrieve api information
  useEffect(() => {
        const limit = 1;
        const apiKey = 'don't want stoles';
    
        $.ajax({
          method: 'GET',
          url: `https://api.api-ninjas.com/v1/facts?limit=${limit}`,
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
          success: function (result) {
            const str = JSON.stringify(result);
            let n = str.slice(10);
            let z = n.slice(0, -3);
            setFact(z);
          },
          error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
          }
        });
      }, []); // Empty dependency array to ensure the effect runs once when the component mounts

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
    <div className="fact"><p>API Fact: {fact}</p>
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
    </div>
  );
};

export default NoteApp;
