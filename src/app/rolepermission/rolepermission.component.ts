import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rolepermission',
  templateUrl: './rolepermission.component.html',
  styleUrls: ['./rolepermission.component.css']
})
export class RolepermissionComponent implements OnInit {
  @ViewChild('assignpermissionform') assignpermissionform: NgForm;


  roleid: number;
  role: { id: number, name: string, permissions } = { id: 1, name: "role name 1", permissions: [2] };
  permissions = [];
  permissionoptions = [];

  constructor(private route: ActivatedRoute) {
    this.roleid = +this.route.snapshot.queryParams["roleid"];
    for (var i = 0; i < 10; i++) {
      this.permissions.push({ id: i, name: "permission " + i, editable: 1, deletable: 1 ,
      action: "action "+i,
      controller: "controller "+i
    });
    }
    this.getPermissionOptions();
  }

  ngOnInit() {
  }

  private getPermissionOptions() {
    for (var i = 0; i < this.permissions.length - 1; i++) {
      var r = this.permissions[i];
      this.permissionoptions.push({
        name: r.name,
        value: r.id,
        checked: (this.role.permissions.indexOf(r.id) >= 0 ? true : false),
        action : r.action,
        controller: r.controller
      }
      )
      //console.log("matching "+i+","+this.user.roles.indexOf(r.id));
      //console.log(this.roleoptions)
    }
  }

  OnSubmit() {
    console.log(this.assignpermissionform)
    console.log(this.selectedOptions());
  }

  selectedOptions() { // right now: ['1','3']
    return this.permissionoptions
      .filter(opt => opt.checked)
      .map(opt => opt.value)
  }
}
