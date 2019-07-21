import { Component, OnInit } from '@angular/core';
import {Router, PRIMARY_OUTLET} from '@angular/router';
import {UrlTree} from '@angular/router';
import {UrlSegment} from '@angular/router';
import {UrlSegmentGroup} from '@angular/router';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  users: any =[];
  direction: any;
  games: any =[];

  constructor(private router: Router, private gameService: GamesServiceService) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction=s[1].path;
   }

   ngOnInit() {
    this.gameService.getRegisteredUser(this.direction).subscribe(
      res => {
        this.direction = res;
        this.gameService.getGameIDsUser(this.direction).subscribe(
          res =>{
            this.games = res;
          },
          err => console.log()
        );
      },
      err => console.log("No encontro juegos")
    );
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
