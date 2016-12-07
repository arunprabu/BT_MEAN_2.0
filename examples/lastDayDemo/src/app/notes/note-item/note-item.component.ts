import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service'; 

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  notesList;

  constructor(private noteService:NoteService) { }

  ngOnInit() {
     this.notesList = this.noteService.getNotes()
  }

}
