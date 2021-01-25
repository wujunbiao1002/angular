import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() {
  }

  data1 = [{
    id: '10000',
    name: '桔梗'
  }, {
    id: '10001',
    name: '奈落'
  }];
  isShow = true;
  name: '魏怡倩';

  ngOnInit(): void {
  }

  trackByItems(index: number, item: any): string {
    return item.id;
  }

  changeShow(): void {
    this.isShow = !this.isShow;
  }

  changeName(): void {
    this.name = '魏怡倩';
  }
}
