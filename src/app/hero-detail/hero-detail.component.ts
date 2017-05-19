import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../shared/model/hero.model';
import {HeroService} from '../shared/service/hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: `hero-detail`,
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  hero: Hero;
  // id: string;
  constructor(
              private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    // this.route.params.subscribe(function (p: Params) {
    //   this.id = p['id'];
    // });
    // 화살표함수로 변경
    this.route.params.subscribe( (p) => this.hero =  this.heroService.getHero(+p['id']) );
  }

  goBack(): void {
    this.location.back();
  }


}

