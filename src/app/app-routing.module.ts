import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GuardLogin } from './services/guard.login';
import { Guard } from './services/guard';
import { SavedComponent } from './components/saved/saved.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LoginRoomComponent } from './components/login-room/login-room.component';

const routes: Routes = [
  {
    path:'',//Ruta raiz
    canActivate:[GuardLogin],
    component: LoginComponent
  },
  {
    path:'login',
    canActivate:[GuardLogin],
    component: LoginComponent
  },
  {
    path:'home',
    canActivate:[Guard],
    component: HomeComponent,
  
  },
  {
    path:'register',
    canActivate:[GuardLogin],
    component: RegisterComponent
  },
  {
    path:'room/:room',
    component: RoomComponent,
   
  },
  {
    path:'saved',
    component: SavedComponent
  },
  {
    path:'myrooms',
    component: RoomsComponent
  },
  {
    path:'login/room',
    component: LoginRoomComponent
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
