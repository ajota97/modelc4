import { Injectable,EventEmitter ,Output} from '@angular/core';
import {io} from 'socket.io-client';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class SocketWebService   {
  io=io("https://modeloc4.herokuapp.com/",{
    withCredentials:true,
    autoConnect:true
  }); 
 
 callback:EventEmitter<any>=new EventEmitter();
//public callback:any;


  constructor(private cookieService:CookieService) {
  
  this.io.emit('joinRoom', {room: cookieService.get('room')}, function(resp: any) {  
   
    console.log( resp);
    });


  }

 /* this.io.emit('joinRoom', {room: localStorage.getItem('room')}, function(resp: any) {  
   
    console.log( resp);
    });


  }*/
  
  
 
  //Escucha las coordenadas del server y los dibuja a todos los users
  listen=()=>{
    this.io.on('draw_shape', res=>this.callback.emit(res));
  
  }

  
  //Emite las coordenadas a los demas users
  emitModified=(room:any,coord:any)=>{
   this.io.emit("draw_shape",room,coord);
    
}

}
