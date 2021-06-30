import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { SavedService } from './services/saved.service';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import { Location } from '@angular/common';
import { Saved } from '../app/models/saved';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,SavedService]
})
export class AppComponent implements DoCheck{
  title = 'Flowchart';
  public uuid:any;
  public type:any;
  public identity:any;
  public token:any;
  public coord:any;
  public saved : Saved;
  public roomCode:any;

  constructor(
    private _location: Location,
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _saveService:SavedService
  ) {
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
    this.saved=new Saved('','','','','','',true);
   } 

  ngDoCheck() {
    this.loadUser();
    this.loadType();
    this.loadUuid();
  }

  ngOnInit(): void {
    
    this.loadType();
  
    
  }

 

 loadUser(){
   
  this.identity=this._userService.getIdentity();
  this.token=this._userService.getToken();
 }

 loadUuid(){
  this.uuid=new Date().getTime();
 }

 saveType(value:number){
   if(value==1){
    localStorage.setItem('type', 'home'); 
   }
   if(value==2){
    localStorage.setItem('type', 'room'); 
   }

 }
 loadType(){
  this.type=localStorage.getItem('type');
 }

 logout(){
  localStorage.clear();
  this.identity=null; 
  this.token=null;
  this.type='home';
  this.uuid=null;

  this._router.navigate(['/login']);
}

getLink(){
  
      var path=this._location.path();
      var roomCode=path.split("/",3)
      //console.log(roomCode[2])  
      this.roomCode=roomCode[2];

}

onSubmit(){
  
  this.saved.link=this._location.path();
  this.coord=localStorage.getItem('coord');
  this.saved.coord=this.coord;
  this._saveService.save(this.identity._id,this.saved,this.token).subscribe(
    res=>{
      if(res.user && res.user._id){
        this._router.navigate(['/saved']);  
    }
    },
    err=>{
      console.log(err);
    }
  );

}


} 
