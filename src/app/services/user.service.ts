import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class UserService {
    constructor(private http:Http){}

    GetAll(){
        var header = new Headers({'Authorization:':'Basic -'+btoa("")});
        this.http.get(environment.WebAPIURL+environment.GetUsers,{headers:header});
    }

    Get(userid:number){
        //var header = new Headers({'Access-Control-Allow-Origin:':'*'});
        return this.http.get(
            environment.WebAPIURL+environment.GetUser+"?userid="+userid
            //"http://192.168.0.101/getuser?userid=1"
            //,{headers:header}
        ).map((response)=>{
            return response.json();
        });
    }

    Add(newUser:{name:string, email:string, password:string}){
        var header = new Headers([
            {'Authorization:':'Basic -'+btoa("")},
            {'Content-Type': 'Application/json'}
       ]);
        var body = newUser
        this.http.post(
            environment.WebAPIURL+environment.NewUser
            ,body
            ,{headers:header}
        );
    }

    Update(newUser:{name:string, email:string, password:string}){
        var header: Headers = new Headers([
            {'Authorization:':'Basic -'+btoa("")},
            {'Content-Type': 'Application/json'}
        ]);
        var body = newUser
        this.http.post(
            environment.WebAPIURL+environment.NewUser
            ,body
            ,{headers:header}
        );
    }
}