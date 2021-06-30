import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  public user : User;
  public identity: any;
  public token: any;
  public error:boolean | undefined;
  constructor(
    private _userService:UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.user=new User('','','','',true,'','','');
  }

  ngOnInit(): void {
    
  } 
  onSubmit(){
    this._userService.login(this.user).subscribe(
      response=>{
          if(response.user && response.user._id){
            localStorage.setItem('room', 'true'); 
            this.identity=response.user;
            localStorage.setItem('identity', JSON.stringify(this.identity));
            this.token=response.token;
            localStorage.setItem('token', this.token);
            this.error=false;
            localStorage.setItem('type', 'home');
            this._router.navigate(['/home']);
          }else{
            this.error=true;
            console.log(this.error)
            console.log(response.err);
           
          
          }
      },
      err=>{
        this.error=true;
       console.log(err.error.err.message);
       
      }
    );
  }

}
