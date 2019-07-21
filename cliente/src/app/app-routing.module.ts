import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { LibraryComponent } from './components/library/library.component';
import {CentralComponent} from './components/central/central.component';
import {SettingsComponent} from './components/settings/settings.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'library/:id',
    component: LibraryComponent
  },
  {
    path: 'central/:id',
    component: CentralComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
