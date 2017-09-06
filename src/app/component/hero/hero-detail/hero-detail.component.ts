import {Component, OnInit, Input} from '@angular/core';
import {User} from "../../../../model/user";
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "../../../service/hero.service";


@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {



  user: User;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
  }

  ngOnInit() {
    // this.route.params
    // // (+) converts string 'id' to a number
    //   .switchMap((params: Params) => this.heroService.getDetailUser(params['name']))
    //   .subscribe((user: User) => this.user = user);
  }

}
