import { Component, OnInit } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { UrlTree } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';
import { GamesServiceService } from '../../services/games-service.service';
import { GameUser } from '../../models/GameUser';

@Component({
  selector: 'app-games-library',
  templateUrl: './games-library.component.html',
  styleUrls: ['./games-library.component.css']
})
export class GamesLibraryComponent implements OnInit {

  show: boolean = false;
  direction: any;
  games: any = [];

  game: GameUser = {
    user_id: 0,
    game_id: 0,
    max_score: 0,
  }  

  constructor(private gameService: GamesServiceService, private router: Router) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction = s[1].path;
   }

  ngOnInit() {

    if(this.direction != 'any'){
      this.show = true;
    }

    this.gameService.getEveryGame().subscribe(
      res => {
        this.games = res;
      },
      err => console.log("ERROR")
    )
  }
  /*
  open_game(game_name) {
    if(game_name){
      this.router.navigate(['./game/', game_name]);
    }
  }
  */
}
