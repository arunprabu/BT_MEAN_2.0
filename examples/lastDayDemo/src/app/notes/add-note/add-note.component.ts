import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../note.service'; 

@Component({
  selector: 'app-add-note',
  template: `
    <form (ngSubmit)="onNoteAdd(f)" #f="ngForm">
      <div class="form-group">
        <textarea class="form-control" 
                  id="noteInput" 
                  placeholder="Enter your Note"
                  name="noteInput"
                  [(ngModel)]="noteList"></textarea>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  `,
  styles: []
})
export class AddNoteComponent{

  noteList;

  constructor(private noteService:NoteService) { }

  onNoteAdd( form:NgForm){
    this.noteList = this.noteService.addNote(form.value.noteInput)
    form.resetForm();
  }
}
