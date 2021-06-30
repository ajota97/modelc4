import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SavedService } from '../../services/saved.service';
import { Saved } from 'src/app/models/saved';
import { CoordServiceService } from '../../coord-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router'


@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
  providers:[UserService, SavedService]
})
export class SavedComponent implements OnInit {
  public identity:any;
  public token:any;
  public saved:Saved[] | undefined;
  
 
  constructor(
    private _userService:UserService,
    private _savedService:SavedService,
    private _coordService: CoordServiceService ,
    private _router: Router,
  ) {
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
   }

  ngOnInit(): void {
    this.getSaved();
    localStorage.setItem('coord', '');
    localStorage.setItem('saveCoord', '');
  }

  getSaved(){
    this._savedService.getSaved(this.identity._id,this.token).subscribe(
      res=>{
    this.saved=res.saved;
      },
      err=>{

      }
      );
  }

  sendCoord(coord:any,link:any){
  this._coordService.sendCoord.emit(coord);
  this._router.navigate([link]);
  

  }
  

}
