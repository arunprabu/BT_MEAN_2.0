import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from "../notes.service"

@Component({
  selector: 'app-add-note',
  template: `
    <form #f="ngForm" (ngSubmit)="onNoteSubmit(f)" class="col-md-6 col-md-offset-3">
      <div class="form-group">
        <textarea class="form-control" 
                  name="noteInput" 
                  required="true"
                  placeholder="Add your note"
                  [(ngModel)]="noteData"></textarea>
      </div>
      <button type="submit" class="btn btn-default col-md-12">Add my Note</button>
    </form>
  `,
  styles: []
})
export class AddNoteComponent {
  noteData;

  constructor(private notesService: NotesService) { }

  onNoteSubmit(form: NgForm){
    console.log(form.value.noteInput)
    //from here we have to send a HTTP service call, send the note entered
    this.notesService.addNote(form.value.noteInput);
    form.resetForm();
  }

}
