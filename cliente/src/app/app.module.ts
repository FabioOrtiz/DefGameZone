import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { LoginComponent } from './components/login/login.component';
import { UsersService } from './services/users.service';
import { LibraryComponent } from './components/library/library.component';
import { CentralComponent } from './components/central/central.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserRegisterComponent,
    GameListComponent,
    LoginComponent,
    LibraryComponent,
    CentralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
