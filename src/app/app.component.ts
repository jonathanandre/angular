import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-ang-event';

  constructor(private dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {

  }

  isConnected(): boolean {
    let u : any = localStorage.getItem('user');
    let user = JSON.parse(u);
    if(user!=null) {
      return true;
    } else {
      return false;
    }
    
  }
  

}
