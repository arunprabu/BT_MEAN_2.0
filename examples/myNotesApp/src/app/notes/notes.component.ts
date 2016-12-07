import { Component, OnInit } from '@angular/core';
import { NotesService } from "./notes.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService] // this is important
})
export class NotesComponent{

  constructor() { }

}
