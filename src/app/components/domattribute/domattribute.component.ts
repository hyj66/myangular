import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domattribute',
  templateUrl: './domattribute.component.html',
  styleUrls: ['./domattribute.component.css']
})
export class DomattributeComponent implements OnInit {

  constructor() { }
  private divId:string = "a";
  private str:string = "我是之前的值";
  private classStr:string = "cc";
  private src:string;
  private flag:boolean = true;
  
  
  
  ngOnInit() {
  }
  private changeId(){
    this.divId = "b";
  }
  private changeStr(){
    this.str = "<h1>aaaaa</h1>";
  }
  private changeImgSrc(){
    this.src = "http://www.baidu.com/img/baidu_jgylogo3.gif"
  }

}
