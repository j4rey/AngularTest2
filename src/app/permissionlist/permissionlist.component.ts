import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissionlist',
  templateUrl: './permissionlist.component.html',
  styleUrls: ['./permissionlist.component.css']
})
export class PermissionlistComponent implements OnInit {

  permissions=[];
  constructor() {  for(var i = 0; i < 10;i++)
    {
      this.permissions.push({id:i,name:"permission "+i,editable:1, deletable:1});
    }}

  ngOnInit() {
  }
  OnDeletePermission_Clicked(permissionid:number){
    alert("delete permission "+permissionid)
  }

}
