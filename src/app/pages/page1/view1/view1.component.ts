import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  @Output() listDateChange = new EventEmitter();
  public value: string;

  constructor() {
  }

  ngOnInit(): void {
  }
  submit(): void{
    if (this.value){
      this.listDateChange.emit(this.value);
    }
  }
}
