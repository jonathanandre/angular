import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit {

  constructor( private httpClient: HttpClient, private mat: MatDialogRef<FormEventComponent>) { }

  ngOnInit(): void {
  }

  createEvent(value: any) {
     console.log('methode createEvent fonctionne, ', value);
     let u : any = localStorage.getItem('user');
     let user = JSON.parse(u);
     let event = {titre: value.titre, description: value.description, dateEvent: value.dateEvent, user: user};
    this.httpClient.post('http://localhost:8087/createEvent', event).subscribe({
      next: (data)=> {console.log(data); this.mat.close()},
      error: (err)=> {console.log(err)}
    })

  }

}
