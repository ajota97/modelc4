import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
public user : User;
public error:boolean | undefined;
public message:string | undefined
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
    this._userService.register(this.user).subscribe(
      response=>{
        if(response.user && response.user._id){
            this.error=false;
            this._router.navigate(['/login']);
            console.log(response);
        }else{
          this.error=true;
        }
      },
      error=>{
        this.error=true;
        this.message=error.error.err.message;
        //this.error=error.error.err.message;
        console.log(error.error.err.message);
      
        
      }
    );
  }

}
