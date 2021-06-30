import { Component, OnInit } from '@angular/core';
import { JoinRoom } from 'src/app/models/joinroom';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-login-room',
  templateUrl: './login-room.component.html',
  styleUrls: ['./login-room.component.css']
})
export class LoginRoomComponent implements OnInit {
  public joinroom : JoinRoom;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
   this.joinroom=new JoinRoom("","");
  }

  ngOnInit(): void {
  }


  onSubmit(){
    localStorage.setItem('type', 'home');
    localStorage.setItem('room', 'true'); 
this._router.navigate(['/room/',this.joinroom.codigo]);
  }



}
