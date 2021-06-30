import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { BoardComponent } from './components/board/board.component';
import { GuardLogin } from './services/guard.login';
import { UserService } from './services/user.service';
import { Guard } from './services/guard';
import { SavedComponent } from './components/saved/saved.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LoginRoomComponent } from './components/login-room/login-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    LoginComponent,
    RegisterComponent,
    BoardComponent,
    SavedComponent,
    RoomsComponent,
    LoginRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
  ],
  providers: [
    CookieService,
    GuardLogin,
    UserService,
    Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
