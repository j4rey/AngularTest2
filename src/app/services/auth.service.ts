import { Http, Headers, Response} from "@angular/http";
import { environment } from "../../environments/environment.prod";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { SessionService } from "./session.service";

@Injectable()
export class AuthService {
    
    constructor(private http:Http, private session:SessionService){}

    Login(userData:{email:string,password:string}){
        var header = new Headers([
            {'Content-Type':'Application/json'}
        ]);
        this.http.post(
            environment.WebAPIURL+environment.Login,
            userData,
            {headers:header}
        ).map((response)=>{
            console.log(response);
            if(response.ok){
                console.log("save session")
            }
            return response;
        });
    }

    
    Register(userData:{username:string, email:string, password:string, confirmpassword:string}){
        var header = new Headers([
            {'Content-Type':'Application/json'}
        ]);
        return this.http.post(
            environment.WebAPIURL+environment.Register,
            userData,
            {headers:header}
        ).map((res:Response)=>{
            if(res){
                if(res.status === 200){
                    return [{status:res.status, json:'OK'}]
                }
            }
        }).catch((error:any)=>{
            return Observable.throw(new Error(error.status));
        });
    }
}