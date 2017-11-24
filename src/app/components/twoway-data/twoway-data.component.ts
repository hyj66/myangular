import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-data',
  templateUrl: './twoway-data.component.html',
  styleUrls: ['./twoway-data.component.css']
})
export class TwowayDataComponent implements OnInit {

  constructor() { }
  private msg:string = "我是谁";
  private tds:Array<string>;
  // private tds:string = "";
  
  ngOnInit() {
  }
  private addData1 (){
    // this.tds.push(this.msg);
    this.tds.push("wo");
  }
}
