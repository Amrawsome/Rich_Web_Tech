import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';

const NoteApp = () => {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    localStorage.removeItem('notes');

    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNote(JSON.parse(storedNotes));
    }
  }, []);

  const updateDB = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const addNote = () => {
    const newNote = {
      key: Math.random() * 1000000000000000000000000000000000000,
      backgroundColor: 'white',
    };
    setNote((prevNotes) => [...prevNotes, newNote]);
    updateDB();
  };

  const deleteNote = (key) => {
    const updatedNotes = notes.filter((note) => note.key !== key);
    setNote(updatedNotes);
    updateDB();
  };

  const noteChange = (key, content) => {
    setNote((prevNotes) =>
      prevNotes.map((note) => (note.key === key ? { ...note, content } : note))
    );
    updateDB();
  };

  const formatTextItalic = (key) => {
    const noteDiv = document.getElementById(`note-${key}`);
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');

      if (range.commonAncestorContainer.parentNode.style.fontStyle === 'italic') {
        span.style.fontStyle = 'normal';
      } else {
        span.style.fontStyle = 'italic';
      }

      range.surroundContents(span);
      noteChange(key, noteDiv.innerHTML);
    }
  };

  const formatTextBold = (key, formatType) => {
    const noteDiv = document.getElementById(`note-${key}`);
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');

      if (range.commonAncestorContainer.parentNode.style.fontWeight === 'bold') {
        span.style.fontWeight = 'normal';
      } else {
        span.style.fontWeight = 'bold';
      }
      range.surroundContents(span);   
      noteChange(key, noteDiv.innerHTML);
    }
  };
  
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

  const clear = (key) => {
    const noteDiv = document.getElementById(`note-${key}`);
 
    Array.from(noteDiv.childNodes).forEach((node) => {
      if (
        node.nodeType === Node.TEXT_NODE ||
        (node.nodeName === 'SPAN' && !node.style.fontWeight)
      ) {
 
        node.remove();
      } else if (node.style.fontWeight === 'bold') {

        node.style.fontWeight = 'normal';
        node.remove();
      }
    });
  };

  const copyToClipboard = (key) => {
    const noteDiv = document.getElementById(`note-${key}`);
    const contentNodes = Array.from(noteDiv.childNodes).map((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.nodeValue;
      } else if (node.nodeType === Node.ELEMENT_NODE) {

        return node.innerText;
      }
      return '';
    });

    const textContent = contentNodes.join('');
    if (textContent) {
      copy(textContent.slice(0,-14));
      alert(`You have copied "${textContent.slice(0,-14)}"`);
    } else{
      alert('The note is empty, nothing to copy.');
    }
  };

  return (
    <div className="container">
      <button className="add" onClick={addNote}>
        Add note
      </button>
      <br></br>
      <br></br>
      <div className="note">
        {notes.map((note) => (
          <div
            className="n-input"
            contentEditable="true"
            suppressContentEditableWarning={true}
            key={note.key}
            style={{
              backgroundColor: note.backgroundColor, 
            }}
            id={`note-${note.key}`}
            onInput={(e) => noteChange(note.key, e.currentTarget.innerHTML)}
          >
            <img className="pict" src="copy.png" alt="Copy" onClick={() => copyToClipboard(note.key)}/>
            <img className="erase" src="eraser.png" alt="Clear" onClick={() => clear(note.key)} />
            <img className="italic" src="Italic.png" alt="Italic" onClick={() => formatTextItalic(note.key)} />
            <img className="bold" src="bold.png" alt="Bold" onClick={() => formatTextBold(note.key, 'fontWeight')} />
            <img className="del" src="icons8-bin-24.png" alt="Delete" onClick={() => deleteNote(note.key)} />
            <select
            className="colors"
            value={note.backgroundColor}
            onChange={(e) => colorChange(e, note.key)}
            >
            <option key="red" value="red">Red</option>
            <option key="green" value="green">Green</option>
            <option key="blue" value="blue">Blue</option>
            </select>
          </div>
        ))}
      </div>
      <a href="https://www.flaticon.com/free-icons/copy" title="Copy icons"> Copy icons created by Pixel perfect - Flaticon</a>
      <br></br>
      <a href="https://www.flaticon.com/free-icons/eraser" title="Eraser icons">Eraser icons created by Freepik - Flaticon</a>
      <br></br>
      <a href="https://www.flaticon.com/free-icons/italic" title="Italic icons">Italic icons created by Ilham Fitrotul Hayat - Flaticon</a>
      <br></br>
      <a href="https://www.flaticon.com/free-icons/underline" title="Underline icons">Underline icons created by Google - Flaticon</a>
      <br></br>
      <a href="https://www.flaticon.com/free-icons/bold" title="Bold icons">Bold icons created by Dave Gandy - Flaticon</a>
    </div>
  );
};

export default NoteApp;
