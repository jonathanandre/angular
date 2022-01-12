import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: any;
  msg: any;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  seConnecter(value: any) {
    this.httpClient.post('http://localhost:8087/login', value).subscribe({
      next:(data)=> {console.log(data); 
        this.user = data;
      if(this.user== null) {
        this.msg = "login ou mdp incorrect";
      } else {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('event');
      }
      },
      error: (err)=> {console.log(err)}
    })

  }

}
