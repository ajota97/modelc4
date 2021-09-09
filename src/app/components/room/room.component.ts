import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  
   room:any 
   
  constructor(
    private _route: ActivatedRoute, 
    private _router: Router,
    private cookieService:CookieService,
    ) { 

   }

  ngOnInit(): void {
    localStorage.setItem('type', 'room'); 
    this.room=this._route.snapshot.paramMap.get('room');
    this.cookieService.set('room',this.room);
   
   
  }



}
