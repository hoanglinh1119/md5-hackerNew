import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes : number =0;
  isLike: boolean = false;
  like(){
    this.likes++;
  }
  unlike(){
    this.likes--;
  }
  likeThis(){
    this.isLike = ! this.isLike;
    if (this.isLike){this.like()}
    else {this.unlike()}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
