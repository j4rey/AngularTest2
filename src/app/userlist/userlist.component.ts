import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users=[];

  constructor() { 
    for(var i = 0; i < 10;i++)
    {
      this.users.push({id:i,name:"name "+i,editable:1, deletable:1});
    }
  }

  ngOnInit() {
  }

  OnDeleteUser_Clicked(userid:number){
    alert("delete user "+userid)
  }
}
