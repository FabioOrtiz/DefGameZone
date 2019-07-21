import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  games: any =[];
  
  constructor(private gameService: GamesServiceService) { }

  ngOnInit() {
    this.gameService.getEveryGame().subscribe(
      res =>{
        this.games=res;
      },
      err=>console.log("ERROR")
    )
  }
}
