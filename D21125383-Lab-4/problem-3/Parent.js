class Note {
    constructor(parent = null) {
      this.parent = parent;
      this.children = [];//array of children
      this.element = this.createNote();//creates new note
      this.subDelete();//deletes notes 
    }
    //cretes notes from lab one with updated color picking
    createNote() {
      const noteBox = document.createElement("p");
      noteBox.className = "n-input";
      noteBox.setAttribute("contenteditable", "true");
      noteBox.id = Math.random() * 1000000000000000000000000000000000000;

      const deleteBtn = document.createElement("img");
      deleteBtn.className = "delete";
      deleteBtn.src = "icons8-bin-24.png";
      deleteBtn.addEventListener("click", () => this.delete());
      noteBox.appendChild(deleteBtn);

      const colorSelect = document.createElement("select");
      colorSelect.className = "colors";
      colorSelect.id = "colid";
      //for each to add background colors list
      const colors = ["Red", "Green", "Blue"];
      colors.forEach(color => {
        const option = document.createElement("option");
        option.value = color.toLowerCase();
        option.text = color;
        colorSelect.appendChild(option);
      });
      colorSelect.addEventListener("change", () => this.updateBackgroundColor(colorSelect.value));//changes color
      noteBox.appendChild(colorSelect);
      //returns note
      return noteBox;
    }
    //adds children to deletion
    subDelete() {
      if (this.parent) {
        this.parent.children.push(this);
      }
    }
    delete() {
      // loop to delete child notes
      this.children.forEach(child => child.delete());
      //checks for parent note then creates child array using filter
      if (this.parent) {
        this.parent.children = this.parent.children.filter(child => child !== this);
      }
      //removes element
      this.element.remove();
    }
    updateBackgroundColor(color) {
      this.element.style.backgroundColor = color;
    }
  }
  //initlializes variables
  const parentNoteCont = document.querySelector(".parent_note");
  const childNoteCont = document.querySelector(".child_note");
  const btnADD = document.querySelector(".add");
  //updates the local db
  function updateDB() {
    localStorage.setItem("notes", parentNoteCont.innerHTML);
  }
  //creates an observable to emit addBtnAdd event
  const addBtnAdd = rxjs.fromEvent(btnADD, "click");
  addBtnAdd.subscribe(() => {
    const parentNote = new Note();
    // Append the parent note to the parent note container
    parentNoteCont.appendChild(parentNote.element);
    // add number of child notes after inputing prompt
    const childCount = prompt("Enter the number of child notes:");
    for (let i = 0; i < childCount; i++) {
      const childNote = new Note(parentNote);
      childNoteCont.appendChild(childNote.element);
    }
  });