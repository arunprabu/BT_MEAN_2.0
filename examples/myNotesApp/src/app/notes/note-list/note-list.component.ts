import { Component, OnInit } from '@angular/core';
import { NotesService } from "../notes.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notesList;
  
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    // when this comp is initialized send a call to get the list of notes and save them in above NoteListComponent
    this.notesList = this.notesService.getNotes()
    console.log(this.notesList)
  }

}
