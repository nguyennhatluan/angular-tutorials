import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  mySubject = new Subject();

  constructor() { }

  ngOnInit() {

  }

  onEmit(){
    this.mySubject.next('Emit data');
  }

  onSubcribe(){
    console.log('on subscribe');
    this.mySubject.subscribe(data => {
      console.log(data);
    })
  }

}