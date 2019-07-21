import { Component, OnInit } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { UrlTree } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  IDs: any = [];
  direction: any;
  games: any = [];
  gamesIDs: any = [];

  constructor(private router: Router, private gameService: GamesServiceService) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction = s[1].path;
  }

  ngOnInit() {
    this.gameService.getRegisteredUser(this.direction).subscribe(
      res => {
        this.IDs = res;
        
        for(let i = 0; i < this.IDs.length; i++){
          //console.log("i", this.IDs[i].id);
          this.gameService.getGameIDsUser(this.IDs[i].id).subscribe(
            res => {
              this.gamesIDs = res;
              
              for(let j = 0; j < this.gamesIDs.length; j++){
                //console.log("j", this.gamesIDs[j].game_id);
                this.gameService.getNameGame(this.gamesIDs[j].game_id).subscribe(
                  res => {
                    this.games.push(res);
                    
                  },
                )
              }
              
            },
            err => console.log()
          );
        }
        
      },
      err => console.log("No encontro juegos")
    );
    //console.log(this.games)
  }
  /*
 ngOnInit() {
   this.userService.getUser(this.direction).subscribe(
     res => {
       this.users = res;
       console.log(this.direction);
     },
     err => console.log(err+this.direction)
   );
 }
 */
}