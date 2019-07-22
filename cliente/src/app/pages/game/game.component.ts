import { Component, OnInit } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { UrlTree } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  direction: any;

  constructor(private router: Router) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction = s[1].path;
    //console.log(this.direction);
  }

  ngOnInit() {
    if (this.direction == 'penguin') {
      console.log("penguin game");
      this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js');
      this.loadScript('../assets/penguin/sketch.js');
      this.loadScript('../assets/penguin/board.js');
      this.loadScript('../assets/penguin/defeat.js');
      this.loadScript('../assets/penguin/obstacle.js');
      this.loadScript('../assets/penguin/penguin.js');
    }
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
