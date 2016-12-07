import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NoteService {
  notesList = []

  constructor(private http:Http) { }
  
  addNote(note){
    //this.notesList.push({ 'noteText': note,  'postedBy': 'Arun'} );
    //console.log(this.notesList);
    const body = JSON.stringify(note);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post("http://localhost:3000/notes", body, {headers: headers } )
    .map((response: Response) => {
      this.notesList.push()
      console.log(response)
    });
    
  }

  getNotes(){
    this.notesList = [
      { noteText: "Note 1", postedBy: "Arun" },
      { noteText: "Note 2", postedBy: "Arun" }
    ]
    return this.notesList;
  }


  

}
