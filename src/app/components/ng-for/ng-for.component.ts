import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  private addrs:Array<string>;
  private userList:Array<any> = [
    {name:"aaa"},
    {name:"bbb"},
    {name:"ccc"},
    {name:"ddd"},
  ];
 
  ngOnInit() {
  }
  
  

}
