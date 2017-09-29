import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent implements OnInit {
@ViewChild('assignroleform') assignroleform :NgForm;


  userid:number;
  user :{id:number, name:string, roles}={id:1, name:"user name 1",roles:[1]};
  roles=[];
  roleoptions = [];

  constructor(private route:ActivatedRoute) { 
    this.userid=+this.route.snapshot.queryParams["userid"];
    for(var i = 0; i < 10;i++)
    {
      this.roles.push({id:i,name:"role "+i,editable:1, deletable:1});
    }
    this.getRoleOptions();
  }

  ngOnInit() {
  }

  private getRoleOptions(){
    for(var i =0;i < this.roles.length-1;i++){
      var r = this.roles[i];
      this.roleoptions.push({name:r.name, value: r.id, checked: (this.user.roles.indexOf(r.id)>=0?true:false)})
      console.log("matching "+i+","+this.user.roles.indexOf(r.id));
      console.log(this.roleoptions)
    }
  }

  OnSubmit(){
    console.log(this.assignroleform)
    console.log(this.selectedOptions());
  }

  selectedOptions() { // right now: ['1','3']
  return this.roleoptions
            .filter(opt => opt.checked)
            .map(opt => opt.value)
  }
}
