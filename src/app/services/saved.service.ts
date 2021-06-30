import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
//import { Saved } from '../models/saved';
import { global } from './global';


@Injectable()
export class SavedService{
 
    public url: string;
   

    
constructor(
    private _http:HttpClient
){
    this.url=global.url;
}

getSaved(userId:any,token:any):Observable<any>{

let headers=new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
return this._http.get(this.url+'savecoord/'+userId,{headers:headers});

}



save(userId:any,save:any,token:any):Observable<any>{
    
let params=JSON.stringify(save);
let headers=new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
return this._http.post(this.url+'savecoord/'+userId, params,{headers:headers});

}






}            