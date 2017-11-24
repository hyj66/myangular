import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myone',
  templateUrl: './myone.component.html',
  styleUrls: ['./myone.component.css']
})
export class MyoneComponent implements OnInit {

  // 1、定义属性
  private aaa:string = "这个是第一个属性";
  private name:string = "classnameme";
  private myclass:string = "myclass";
  private mytest:string = undefined;
  private flag:boolean = true;
  private changes:string = "改变";

  // 2、定义构造方法
  constructor() { }
  // 3、定义生命周期函数
  ngOnInit() {
  }
  // 4、定义用户自定义方法
  private getString():string{
    return "getString方法的返回值"
  }
  private show(){
    console.log("哈哈哈哈");
  }

}
