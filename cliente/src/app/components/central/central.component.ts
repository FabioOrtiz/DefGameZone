import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';
@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  games: any =[];
  idBasic: any;
  constructor(private gameService: GamesServiceService) { }

  ngOnInit() {//FALTA DATO
    this.gameService.getRegisteredUser().subscribe(
      res => {
        this.idBasic = res;
        this.gameService.getGameIDsUser(this.idBasic).subscribe(
          res =>{
            this.games = res;
          },
          err => console.log()
        );
      },
      err => console.log()
    );
  }



}
