import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {

  roles = [];
  constructor() {
    for(var i = 0; i < 10;i++)
    {
      this.roles.push({id:i,name:"role "+i,editable:1, deletable:1});
    }
   }

  ngOnInit() {
  }

  OnDeleteRole_Clicked(roleid:number){
    alert("Delete role "+roleid);
  }
}
