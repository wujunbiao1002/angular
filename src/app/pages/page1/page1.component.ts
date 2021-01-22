import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  listDate = [{
    name: '傻宝宝1',
    show: true,
  }, {
    name: '傻宝宝2',
    show: true,
  }, {
    name: '傻宝宝3',
    show: true,
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  listDateChange(e): void {
    this.listDate.push({name: e, show: true});
  }
}
