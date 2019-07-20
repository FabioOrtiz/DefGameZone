import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service';
import {Router, PRIMARY_OUTLET} from '@angular/router';
import {UrlTree} from '@angular/router';
import {UrlSegment} from '@angular/router';
import {UrlSegmentGroup} from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  users: any =[];
  direction: any;

  constructor(private userService: UsersService, private router: Router) {
    const tree: UrlTree = router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.direction=s[1].path;
   }

  ngOnInit() {
    this.userService.getUser(this.direction).subscribe(
      res => {
        this.users = res;
        console.log(this.direction);
      },
      err => console.log(err+this.direction)
    );
  }

}
