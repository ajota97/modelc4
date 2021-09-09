import { Component, OnInit } from '@angular/core';
import { JoinRoom } from 'src/app/models/joinroom';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-room',
  templateUrl: './login-room.component.html',
  styleUrls: ['./login-room.component.css']
})
export class LoginRoomComponent implements OnInit {
  public joinroom : JoinRoom;
  room:any
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private cookieService:CookieService,
  ) { 
   this.joinroom=new JoinRoom("","");
  }

  ngOnInit(): void {
  }


  onSubmit(){
    localStorage.setItem('type', 'room'); 
    localStorage.setItem('room', 'true'); 
    //this.room=this._route.snapshot.paramMap.get('room');
    this.cookieService.set('room',this.joinroom.codigo);
this._router.navigate(['/room/',this.joinroom.codigo]);
  }



}
