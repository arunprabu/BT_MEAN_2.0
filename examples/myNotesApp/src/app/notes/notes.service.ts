import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  notesList = []
  constructor() { }

  addNote(note) {
    this.notesList.push({ 'noteText': note, 'postedOn': 'today', 'postedBy': 'Arun'} );
    // from here we will send a call to remote url and then subscribe to the result
    // When we send a req to fetch json content, it is necessary to send req header also. 
    // const headers = new Headers({'Content-Type': 'application/json'});
    console.log(this.notesList);
  }

  getNotes() {
    console.log("getNotes");
    this.notesList = [
      { noteText: "Note 1", postedOn: "24th Oct 2016", postedBy: "Arun" },
      { noteText: "Note 2", postedOn: "1 Dec 2016", postedBy: "Arun" }
    ]
    return this.notesList;
  }

  deleteNote(note) {
    this.notesList.splice(this.notesList.indexOf(note), 1);
  }
}
