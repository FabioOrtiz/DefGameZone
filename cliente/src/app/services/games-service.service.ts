import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GameUser} from '../models/GameUser';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRegisteredUser(id: string){
    return this.http.get(`${this.API}/games/${id}/0`);
  }

  getGameIDsUser(id: string){
    return this.http.get(`${this.API}/games/${id}/1`);
  }

  getNameGame(id: string){
    return this.http.get(`${this.API}/games/${id}/2`);
  }

  getAddGame(game: GameUser){
    return this.http.post(`${this.API}/games`, game);
  }

  setDeleteGame(id: string){
    return this.http.delete(`${this.API}/games/${id}`);
  }

  /*
  Aca ocurre un error, no me toma todo el put, me pregunto si lo mejor sera pasarle todo el GameUser y que funcione igual que el Add
  setMaxScore(id: string, idg: string){
    return this.http.put(`${this.API}/games/${id}/${idg}`);
  }
  */

}
